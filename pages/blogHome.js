import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import style from './blogHome.module.css'
import postsData from '../data/postsData'
import PostsCards from '../components/posts_cards'
// import { render } from 'react-dom'

export default function BlogHome() {

   const posts = postsData.map(post =>
      <Link href={post.link}>
         <a>
            <div className={style.post}>
               <span>&#8599;</span>
               <img src={post.img} />
               <h2>{post.title}</h2>
               <p>{post.description}</p>
            </div>
         </a>
      </Link>
      )

   return (
      <Layout>
         <div className={style.container}>
            <h2>Articles</h2>
          <PostsCards />
            

         </div>
      </Layout>
   )
}
