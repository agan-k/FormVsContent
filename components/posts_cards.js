import React from 'react'
import Link from 'next/link'

import style from './posts_cards.module.css'
import postsData from '../data/postsData'


export default function PostsCards(props) {

   const posts = postsData.map(post =>
         <Link href={post.link} key={post.id}>
            <div className={style.post}>
               <span>&#8599;</span>
            <div className={style.mask}>
               <img src={post.img} />
            </div>
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
