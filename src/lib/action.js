"use server"
import { connectToDb } from "./utils";
import { Post } from "./models";
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