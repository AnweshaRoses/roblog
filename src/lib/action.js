"use server"
import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs"
export const addPost=async(prevState,formData)=>{

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try{
        connectToDb()
        connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("Saved to db");
    revalidatePath("/blog");
    }catch(err){
        console.log(err);
        return {error:"Something went wrong"}
    }
}
export const addUser = async (prevState,formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDb();
  
      await Post.findByIdAndDelete(id);
      console.log("deleted from db");
      revalidatePath("/blog");

    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDb();
  
      await Post.deleteMany({ userId: id });
      await User.findByIdAndDelete(id);
      console.log("deleted from db");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  export const handleGithubLogin = async(e)=>{
  
    await signIn("github")
  }
  export const handleLogOut = async(e)=>{

    await signOut()
  }
  export const register = async(previousState, formData)=>{
    const { username, email, password,img, passwordRepeat } = Object.fromEntries(formData);
    if(password!=passwordRepeat){
      return {error:"Passwords do not match!"}
    }
    try{
      connectToDb()
      const user= await User.findOne({username})
      if(user){
        return {error:"User already exsists"}
      }
      const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
      const newUser=new User({
        username,
        email,
        password:hashedPassword,
        img
    })
    await newUser.save();
    console.log("Saved to DB");
    return {success:true}
    }catch(err){
      console.log(err);
      return{error:"Something went wrong!"}
    }
  }

  export const login = async(previousState,formData)=>{
    const { username,  password } = Object.fromEntries(formData);

    try{
     await signIn("credentials",{username, password})
    }catch(err){
      console.log(err);
      if (err.message.includes("CredentialsSignin")) {
        return { error: "Invalid username or password" };
      }
      throw err;
    }
  }