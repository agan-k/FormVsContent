import React from 'react'
import {Layout} from '../components'
import {PostCard} from '../components';
import {PostsWrapper} from '../styles/styled';
import postsData from '../data/postsData';
import { BlogWrapper } from '../styles/blog/styled';

export default function Blog({theme, toggleTheme}) {
   const posts = postsData.map(post => <PostCard post={post} key={post.id} /> );
   return (
      <Layout theme={theme} toggleTheme={toggleTheme}>
         <BlogWrapper>
            <PostsWrapper>{posts}</PostsWrapper>
         </BlogWrapper>
      </Layout>
   )
}
