import React from 'react'
import {Layout} from '../components'
import {PostCard, SectionTitle} from '../components';
import {PageWrapper, PostsWrapper} from '../styles/styled';
import postsData from '../data/postsData';

export default function Blog() {
   const posts = postsData.map(post => <PostCard post={post} key={post.id} /> );
   return (
      <Layout >
         <PageWrapper>
            <SectionTitle>posts</SectionTitle>
            <PostsWrapper>{posts}</PostsWrapper>
         </PageWrapper>
      </Layout>
   )
}
