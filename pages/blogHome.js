import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import style from './blogHome.module.css'
import postsData from '../data/postsData'
import RecentPosts from '../components/recent_posts'
// import { render } from 'react-dom'

export default function BlogHome() {

   const linksList = postsData.map(item =>
      <div className={style.post_link_container}>
         <div className={style.img_mask}>
            <img src={item.img}/>
         </div>
         <li className={style.article_title}>
            <Link href={item.link}>
               <a>{item.title}</a>
            </Link>
         </li>
         <p>{item.description}</p>
      </div>
      )

   return (
      <Layout>
         <div className={style.container}>
            <h3>Articles</h3>
            <RecentPosts />
            {/* <ul> */}
               {/* {linksList} */}
            {/* </ul> */}
            {/* <h2>Tech</h2> */}
            

         </div>
      </Layout>
   )
}
