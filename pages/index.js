import { useEffect, useState } from 'react'
import Layout from '../components/layout'

import Badge from '../components/badge'
import Project from '../components/project'
import OngoingProject from '../components/OngoingProject'
import PostsCards from '../components/posts_cards'
import ReactPlayer from 'react-player'

import style from './index.module.css'
import stackData from '../data/stackData'
import projectsData from '../data/projectsData'

export default function Home() {
  const [hasWindow, setHasWindow] = useState(false);
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

  const curlyL = <span className={style.curly_brackets}>&#123;</span>
  const curlyR = <span className={style.curly_brackets}>&#125;</span>
  return (
    <Layout>
      <div className={style.container}>
        <Badge />

        <div className={style.section_description}>
          {curlyL}<h1>News: slo͞oh is here</h1>{curlyR}
        </div>

        <div className={style.sloohVideo}>
          { 
            hasWindow && 
            <ReactPlayer
              url="slooh.mp4"
              light="slooh_thumbnail.png"
              controls={true}
              width="100%"/>
          }
        </div>
        
        <div className={style.section_description}>
          {curlyL}<h1>ongoing projects</h1>{curlyR}
        </div>

        {ongoingProjects}

        <div className={style.section_description}>
          {curlyL}<h1>recent posts</h1>{curlyR}
        </div>
        <PostsCards recent='true' />
      </div>
    </Layout>
  )
}
