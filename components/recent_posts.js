import React from 'react'
import Link from 'next/link'

import style from './recent_posts.module.css'
import recent_postsData from '../data/recent_postsData'


export default function RecentPosts() {

  
   const recent_posts = recent_postsData.map(post =>
      <div className={style.recent_post}>
         <img src={post.img} />
         <h2>{post.title}</h2>
         <p>{post.description}</p>
         <Link href={post.link}>
            <a>
               {/* &#8594; */}
               &#8600;
            </a>
         </Link>
      </div>
      )
   return (
      <div className={style.posts_container}>
         {recent_posts}
      </div>
   )
}
