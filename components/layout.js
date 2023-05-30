import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import style from './layout.module.css'
import stackData from '../data/stackData'

export default function Layout({ children, title = 'FormVsContent' }) {
   const router = useRouter()
   const currentYear = new Date().getFullYear();
   const linkData = [
      {name: 'home', link: '/'},
      {name: 'blog', link: '/blogHome'},
      {name: 'resume', link: '/about'},
   ]
   const linksList = linkData.map(item =>
      <li key={item.name} className={router.pathname == `${item.link}` ? `${style.active}` : ''}>
        <Link href={item.link}>
          <span>{item.name}</span>
        </Link>
      </li>
    )
  
   return (
      <div className={style.container}>
        <div className={style.banner_mask}></div>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={style.header}>
          <ul>{linksList}</ul>
        </header>
        <main className={style.main}>
          {children}
        </main>
        <footer className={style.footer}>
          <div className={style.logos}>
             {stackData.map(logo =>
              <div key={logo.src} className={style.img_wrapper}>
                 <img src={logo.src} />
              </div>
             )}
          </div>
          <p>
          ©<span>{currentYear}</span> FormVsContent
          </p>
        </footer>
         
      </div>
   )
}
