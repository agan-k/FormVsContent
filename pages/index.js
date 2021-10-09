import Layout from '../components/layout'

import Badge from '../components/badge'
import Project from '../components/project'
import PostsCards from '../components/posts_cards'
import ReactPlayer from 'react-player'

import style from './index.module.css'
import stackData from '../data/stackData'
// import sloohVideo from '../public/assets/sailin.jpg'

export default function Home() {

   const StackFilter = (arr, ...params) => {
      let match = [...params]
      let filteredArr = []
      for (let i = 0; i < arr.length; i++) {
         for (let j = 0; j < match.length; j++) {
            if (arr[i].name == match[j]) {
               filteredArr.push(arr[i])
            }
         }
      }
      return filteredArr
   }
   const kworqStack = StackFilter(stackData, 'Tailwind', 'NextJS', 'TypeScript', 'Prismic CMS')
      .map(item => item)
   const lamoreStack = StackFilter(stackData, 'Sass', 'Liquid', 'JavaScript')
      .map(item => item)
   const sloohStack = StackFilter(stackData, 'CSS3', 'HTML5', 'JavaScript')
      .map(item => item)
   const laraStack = StackFilter(stackData, 'CSS3', 'HTML5', 'JavaScript', 'ReactJS', 'NextJS', 'API', 'Prismic CMS')
      .map(item => item)
   const rajStack = StackFilter(stackData, 'CSS3', 'HTML5', 'JavaScript', 'ReactJS', 'NextJS', 'API', 'Prismic CMS')
      .map(item => item)
   const aicStack = StackFilter(stackData, 'ReactJS', 'JavaScript', 'CSS3', 'HTML', 'API')
      .map(item => item)
   const katStack = StackFilter(stackData, 'ReactJS', 'JavaScript', 'HTML', 'CSS3')
      .map(item => item)
   const domStack = StackFilter(stackData, 'JavaScript', 'HTML5', 'CSS3')
      .map(item => item)
   const curlyL = <span className={style.curly_brackets}>&#123;</span>
   const curlyR = <span className={style.curly_brackets}>&#125;</span>
   return (
    <Layout>
      <div className={style.container}>
        <Badge /> 
        <br />

        <div className={style.section_description}>
          {curlyL}<h1>News: slo͞oh is here</h1>{curlyR}
        </div>

        <div className={style.sloohVideo}>
          <ReactPlayer
              url="slooh.mp4"
              light="slooh_thumbnail.png"
              controls={true}
              height="100%"
              width="100%"/>
        </div>
        
        <div className={style.section_description}>
            {curlyL}<h1>current projects</h1>{curlyR}
        </div>
        
        <Project
          name='RajivJayaveera.com'
          description='Music artist profile web app. Headless CMS, responsive design, third party 
          music distribution integration, form submission.'
          url='https://rajivJayaweera.com'
          stack={rajStack}
          repo_link='https://github.com/agan-k/raj'
          desktop_sshot={['/assets/screen_shots/raj_desktop.jpg', '/assets/screen_shots/raj_desktop1.jpg']}
          mobile_sshot={['/assets/screen_shots/raj_mobile.jpg', '/assets/screen_shots/raj_mobile1.jpg',
          '/assets/screen_shots/raj_mobile2.jpg', '/assets/screen_shots/raj_mobile3.jpg',]}
        />
        <Project
          name='Lamoredesign.com'
          description='Custom PDP for a Shopify Plus store.'
          url='https://lamoredesign.com'
          stack={lamoreStack}
          desktop_sshot={['/assets/screen_shots/lamore.png']}
        />
        <Project
          name='slo͞oh.app'
          description='Interactive ear-training tool with built-in algorithmic logic based on the 
          "movable do" method.'
          url='https://slooh.app'
          stack={sloohStack}
          repo_link='https://github.com/agan-k/slooh-app1.2'
          desktop_sshot={['/assets/screen_shots/slooh.png']}
          mobile_sshot={['', '']}
        />
        <Project
          name='kworq.com'
          description='Creative agency homepage with Prismic CMS'
          url='https://kworq.com'
          stack={kworqStack}
          desktop_sshot={['/assets/screen_shots/kworq.png']}
        />
        <Project
          name='LaraBello.com'
          description='Web app. Integration with Bandcamp and headless CMS.'
          url='https://larabello.com'
          stack={laraStack}
          repo_link='https://github.com/agan-k/lara'
          desktop_sshot={['/assets/screen_shots/lara_desktop1.jpg', '/assets/screen_shots/lara_desktop2.jpg']}
          mobile_sshot={['', '']}
        />
        <Project
          name='AIC-Photography.info'
          description='Educational photography hub featuring selected artwork from the Art Institute 
          Of Chicago public API.'
          url='https://aic-photography-collection.info'
          stack={aicStack}
          repo_link='https://github.com/agan-k/aic-photography-selection'
          desktop_sshot={['/assets/screen_shots/aic_desktop.jpg', '/assets/screen_shots/aic_desktop1.jpg']}
          tablet_sshot={['/assets/screen_shots/aic_tablet.png']}
          mobile_sshot={['/assets/screen_shots/aic_mobile.png', '/assets/screen_shots/aic_mobile1.png',]}
        />
        
        <div className={style.section_description}>
            {curlyL}<h1>recent posts</h1>{curlyR}
        </div>
        <PostsCards recent='true' />
        
      </div>
   </Layout>
  )
}
