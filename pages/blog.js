import React from 'react'
import {Layout} from '../components'
import {PostCard} from '../components';
import {PostsWrapper} from '../styles/styled';
import postsData from '../data/postsData'

export default function Blog({theme, toggleTheme}) {
   const posts = postsData.map(post => <PostCard post={post} key={post.id} /> );
   return (
      <Layout theme={theme} toggleTheme={toggleTheme}>
         <div>
            {/* <span>Articles</span> */}
            <PostsWrapper>{posts}</PostsWrapper>
         </div>
      </Layout>
   )
}
