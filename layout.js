import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

// import {Nav, Footer} from './components';
import { currentYear } from './utils';

import style from './layout.module.css'
import stackData from './data/stackData'

export default function Layout({ children, title = 'FormVsContent' }) {
   const router = useRouter()
  
   return (
      <div className={style.container}>
        {/* <div className={style.banner_mask}></div> */}
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav/>
        <main className={style.main}>
          {children}
        </main>
        <Footer/>
      </div>
   )
}
