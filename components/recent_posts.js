import React from 'react'
import Link from 'next/link'

import style from './recent_posts.module.css'
import postsData from '../data/postsData'


export default function RecentPosts() {

  
   const recent_posts = postsData.map((post, index) =>
      index < 3 ?
         <Link href={post.link}>
         <div className={style.recent_post}>
            <img src={post.img} />
            <h2>
               {/* <Link href={post.link}> */}
                  {/* <a> */}
                  {post.title}
                  {/* </a> */}
               {/* </Link> */}
            </h2>
            <p>{post.description}</p>
            {/* <Link href={post.link}> */}
               <a>
                  <span>&#8594;</span>
                  {/* <span>&#8600;</span> */}
               </a>
            {/* </Link> */}
            </div>
          </Link>
          : ''
      )
   return (
      <div className={style.posts_container}>
         {recent_posts}
      </div>
   )
}
