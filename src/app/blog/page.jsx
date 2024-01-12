import React from 'react'
import styles from './blog.module.css'
import Postcard from '@/components/postcard/Postcard'
import { getPosts } from '@/lib/data'


const BlogPage = async() => {
  const posts=await getPosts();
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