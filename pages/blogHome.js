import React from 'react'
import Layout from '../components/layout'
import style from './blogHome.module.css'
import PostsCards from '../components/posts_cards'

export default function BlogHome() {

   return (
      <Layout>
         <div className={style.container}>
            <h2 className={style.category_title}>Articles</h2>
          <PostsCards />
         </div>
      </Layout>
   )
}
