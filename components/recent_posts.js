import React from 'react'
import Link from 'next/link'

import style from './recent_posts.module.css'
import recent_postsData from '../data/recent_postsData'


export default function RecentPosts() {

  
   const recent_posts = recent_postsData.map(post =>
      <div className={style.recent_post}>
         <img src={post.img} />
         <h2>
            <Link href={post.link}>
               {/* <a> */}
               {post.title}
               {/* </a> */}
            </Link>
         </h2>
         <p>{post.description}</p>
         <Link href={post.link}>
            <a>
               <span>&#8594;</span>
               {/* <span>&#8600;</span> */}
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
