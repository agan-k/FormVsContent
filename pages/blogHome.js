import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/layout'

const linkData = [
   {link: 'posts/first-blogpost', name: 'first-blogpost'},
   {link: 'posts/second-blogpost', name: 'second-blogpost'}
]
const linksList = linkData.map(item =>
   <Link href={item.link}>
      <a>{item.name}</a>
   </Link>
   )

export default function blogHome() {

   const router = useRouter()
   const linkData = [
      {link: 'posts/first-blogpost', name: 'first-blogpost'},
      {link: 'posts/second-blogpost', name: 'second-blogpost'}
   ]
   const linksList = linkData.map(item =>
      <li className={router.pathname == `${item.link}` ? 'active' : ''}>
         <Link href={item.link}>
            <a>{item.name}</a>
         </Link>
      </li>
      )


   return (
      <Layout>
         <h1>blogHome</h1>

         <ul>{linksList}</ul>
      </Layout>
   )
}
