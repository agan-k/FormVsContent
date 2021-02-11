import React from 'react'
import Link from 'next/link'

import style from './posts_cards.module.css'
import postsData from '../data/postsData'
import recent_postsData from '../data/postsData'


export default function PostsCards(props) {

   const posts = postsData.map(post =>
         <Link href={post.link}>
            <div className={style.post}>
               <span>&#8599;</span>
               <img src={post.img} />
               <h2>{post.title}</h2>
               <p>{post.description}</p>
            </div>
         </Link>
   )
   const recent_posts = posts.slice(0, 3)
   return (
      <>
         {props.recent ?
         <div className={style.posts_container}>
               { recent_posts }
         </div> :
         <div className={style.posts_container}>
               { posts }
               </div>
         }
      </>
     
   )
}
