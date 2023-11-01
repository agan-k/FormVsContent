import React from 'react'
import {Layout} from '../components'
import style from './blogHome.module.css'
import {PostCard} from '../components';
import {PostsWrapper} from '../styles/styled';
import postsData from '../data/postsData'

export default function BlogHome({theme, toggleTheme}) {
   const posts = postsData.map(post => <PostCard post={post} key={post.id} /> );
   return (
      <Layout theme={theme} toggleTheme={toggleTheme}>
         <div className={style.container}>
            <h2 className={style.category_title}>Articles</h2>
            <PostsWrapper>{posts}</PostsWrapper>
         </div>
      </Layout>
   )
}
