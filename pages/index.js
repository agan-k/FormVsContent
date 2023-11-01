import { useEffect, useState } from 'react'
import {
  OngoingProject,
  SectionTitle,
  SiteLogo,
  Layout,
  PostCard,
} from '../components';
import {PostsWrapper} from '../styles/styled';
import style from './index.module.css';
import projectsData from '../data/projectsData';
import postsData from '../data/postsData';


export default function Home({theme, toggleTheme}) {
  const [hasWindow, setHasWindow] = useState(false);//fixes next.js dependency error
  const posts = postsData.map(post => <PostCard post={post} key={post.id} /> );
  const recentPosts = posts.slice(0, 3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const ongoingProjects = projectsData?.map((item) => {
    return (
      <OngoingProject data={item} key={item.name} />
    )
  });
  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <div className={style.container}>
        <SiteLogo />
        <SectionTitle>ongoing projects</SectionTitle>
        {ongoingProjects}
        <SectionTitle>recent posts</SectionTitle>
        <PostsWrapper>{recentPosts}</PostsWrapper>
      </div>
    </Layout>
  )
}
