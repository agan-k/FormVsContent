import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import style from './layout.module.css'

export default function Layout({ children, title = 'FormVsContent' }) {
   const router = useRouter()
   const linkData = [
      {name: 'home', link: '/'},
      {name: 'blog', link: '/blogHome'},
      {name: 'about', link: '/about'},
   ]
   const linksList = linkData.map(item =>
      <li className={router.pathname == `${item.link}` ? 'active' : ''}>
         <Link href={item.link}>
            <a>{item.name}</a>
         </Link>
      </li>
      )
   return (
      <div className={style.container}>
         <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200;600&family=Roboto+Condensed:wght@300&family=Unica+One&display=swap" rel="stylesheet"></link>
         </Head>
         <header className={style.header}>
            <ul>{linksList}</ul>
         </header>
         <main className={style.main}>
            {children}
         </main>
         <footer>

         </footer>
         
      </div>
   )
}
