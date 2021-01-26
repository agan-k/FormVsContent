import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import style from './layout.module.css'

export default function Layout(
   { children, title = 'FormVsContent'
   
   }) {
   return (
      <div className={style.container}>
         <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <header>
            
         </header>
         <main>
            {children}
         </main>
         
         
      </div>
   )
}
