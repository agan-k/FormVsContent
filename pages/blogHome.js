import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import style from './blogHome.module.css'

const linkData = [
   {link: 'posts/first-blogpost', name: 'first-blogpost'},
   {link: 'posts/second-blogpost', name: 'second-blogpost'}
]
const linksList = linkData.map(item =>
   <Link href={item.link}>
      <a>{item.name}</a>
   </Link>
   )

export default function BlogHome() {

   const router = useRouter()
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
