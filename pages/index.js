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
import { useMediaQuery } from '../utils/hooks';
import { MOBILE_BREAKPOINT } from '../utils/constants';
import { PageWrapper } from '../styles/styled';


export default function Home({theme, toggleTheme}) {
  const [hasWindow, setHasWindow] = useState(false);//TODO: fixes next.js dependency error
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT)

  const posts = postsData.map(post => <PostCard post={post} key={post.id} /> );
  const recentPosts = posts.slice(0, 3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const ongoingProjects = projectsData?.map((item) => {
    return (
      <OngoingProject data={item} key={item.name} theme={theme} />
    )
  });
  return (
    <>
      {!isMobile && <LandingPage />}
      
      <Layout theme={theme} toggleTheme={toggleTheme}>
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
