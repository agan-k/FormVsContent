import React from 'react'
import Link from 'next/link'

import style from './posts_cards.module.css'
import postsData from '../data/postsData'


export default function PostsCards(props) {

   const posts = postsData.map(post =>
            <div className={style.post}>
         <Link href={post.link} key={post.id}>
               <div className={style.arrow}>
                  <span>&#8599;</span>
               </div>
               <div className={style.mask}>
                  <img src={post.img} />
               </div>
               <div>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
               </div>
         </Link>
            </div>
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
