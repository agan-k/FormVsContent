import { useEffect, useState } from 'react'
import {
  Greeting,
  OngoingProject,
  SectionTitle,
  Layout,
  PostCard,
  LandingPage,
} from '../components';
import {PostsWrapper} from '../styles/styled';
import projectsData from '../data/projectsData';
import postsData from '../data/postsData';
import { PageWrapper } from '../styles/styled';


export default function Home() {
  const posts = postsData.map(post => <PostCard post={post} key={post.id} /> );
  const recentPosts = posts.slice(0, 3);

  const ongoingProjects = projectsData?.map((item) => {
    return (
      <OngoingProject data={item} key={item.name} />
    )
  });
  return (
    <>
      {/* <LandingPage /> */}
      
      <Layout>
        <PageWrapper>
          <Greeting />
          <SectionTitle>projects</SectionTitle>
          {ongoingProjects}
          <SectionTitle>recent posts</SectionTitle>
          <PostsWrapper>{recentPosts}</PostsWrapper>
        </PageWrapper>
      </Layout>
    </>
  )
}
