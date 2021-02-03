import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import style from './blogHome.module.css'
import { render } from 'react-dom'

export default function BlogHome() {

   const linkData = [
      {link: 'posts/first-blogpost', name: 'Interactive Image Gallery With React Modal'},
      {link: 'posts/second-blogpost', name: 'second-blogpost'}
   ]
   const linksList = linkData.map(item =>
         <li className={style.article_title}>
            <Link href={item.link}>
            {/* <h3> */}
               <a>{item.name}</a>
            {/* </h3> */}
            </Link>
         </li>
      )


   return (
      <Layout>
         <div className={style.container}>
            <h1>Articles</h1>
            <ul>
               {linksList}
            </ul>
            {/* <h2>Tech</h2> */}
            

         </div>
      </Layout>
   )
}
