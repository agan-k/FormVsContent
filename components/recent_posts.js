import React from 'react'
import Link from 'next/link'
import style from './recent_posts.module.css'


export default function RecentPosts() {

   const recent_postsData = [
      {title: 'Some Title Here', description: 'Description Here...', link: 'posts/first-blogpost'},
      {title: 'Some Title Here', description: 'Description Here...', link: 'posts/first-blogpost'},
      {title: 'Some Title Here', description: 'Description Here...', link: 'posts/first-blogpost'},
   ]
   const recent_posts = recent_postsData.map(post =>
      <div className={style.recent_post}>
         <h2>{post.title}</h2>
         <p>{post.description}</p>
         <Link href={post.link}>
            <a>more..</a>
         </Link>
      </div>
      )
   return (
      <div className={style.posts_container}>
         {recent_posts}
      </div>
   )
}
