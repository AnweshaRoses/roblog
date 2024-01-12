import React from 'react'
import styles from './blog.module.css'
import Postcard from '@/components/postcard/Postcard'
import { getPosts } from '@/lib/data'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async() => {
  // FETCH DATA WITH AN API
  const posts = await getData();
  //Without API
  // const posts=await getPosts();
  return (
    <div className={styles.container}>
    {posts.map((post) => (
      <div className={styles.post} key={post.id}>
        <Postcard post={post} />
      </div>
    ))}
  </div>
  )
}

export default BlogPage