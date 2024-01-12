"use server"
import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
export const addPost=async(formData)=>{

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
  export const handleGithubLogin = async(e)=>{
  
    await signIn("github")
  }
  export const handleLogOut = async(e)=>{

    await signOut()
  }
  export const register = async(formData)=>{
    const { username, email, password,img, passwordRepeat } = Object.fromEntries(formData);
    if(password!=passwordRepeat){
      return "Passwords do not match!"
    }
    try{
      connectToDb()
      const user= await User.findOne({username})
      if(user){
        return "User already exsists"
      }
      const newUser=new User({
        username,
        email,
        password,
        img
    })
    await newUser.save();
    console.log("Saved to DB");
    }catch(err){
      console.log(err);
      return{error:"Something went wrong!"}
    }
  }