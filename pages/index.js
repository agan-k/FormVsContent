import Layout from '../components/layout'

import Badge from '../components/badge'
import Project from '../components/project'
import PostsCards from '../components/posts_cards'

import style from './index.module.css'
import stackData from '../data/stackData'

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
   const sloohStack = StackFilter(stackData, 'CSS3', 'HTML5', 'JavaScript')
      .map(item => item)
   const laraStack = StackFilter(stackData, 'CSS3', 'HTML5', 'JavaScript', 'ReactJS', 'NextJS', 'API', 'Prismic CMS')
      .map(item => item)
   const rajStack = StackFilter(stackData, 'ReactJS', 'JavaScript', 'CSS3', 'HTML5')
      .map(item => item)
   const aicStack = StackFilter(stackData, 'ReactJS', 'JavaScript', 'CSS3', 'HTML', 'API')
      .map(item => item)
   const katStack = StackFilter(stackData, 'ReactJS', 'JavaScript', 'HTML', 'CSS3')
      .map(item => item)
   const domStack = StackFilter(stackData, 'JavaScript', 'HTML5', 'CSS3')
      .map(item => item)
   
   return (
    <Layout>
      <div className={style.container}>
            <Badge /> 
            <br/>
            <h1>&#123;recent posts&#125;</h1>
            <PostsCards recent='true' />
            
            <h1>&#123;current projects&#125;</h1>
         <Project
            name='slo͞oh.app'
            url='https://slooh.app'
            stack={sloohStack}
            repo_link='https://github.com/agan-k/slooh-app1.2'
            desktop_sshot={['/assets/screen_shots/slooh.png']}
            // tablet_sshot={['', '']}
            mobile_sshot={['', '']}
         />
         <Project
            name='LaraBello.com'
            url='https://larabello.com'
            stack={laraStack}
            repo_link='https://github.com/agan-k/lara'
            desktop_sshot={['/assets/screen_shots/lara_desktop1.jpg', '/assets/screen_shots/lara_desktop2.jpg']}
            // tablet_sshot={['', '']}
            mobile_sshot={['', '']}
         />
         <Project
            name='RajivJayaveera.com'
            url='https://rajivJayaweera.com'
            stack={rajStack}
            repo_link='https://github.com/agan-k/raj'
            desktop_sshot={['/assets/screen_shots/raj_desktop.jpg', '/assets/screen_shots/raj_desktop1.jpg']}
            // tablet_sshot={['', '']}
            mobile_sshot={['/assets/screen_shots/raj_mobile.jpg', '/assets/screen_shots/raj_mobile1.jpg',
            '/assets/screen_shots/raj_mobile2.jpg', '/assets/screen_shots/raj_mobile3.jpg',]}
         />
         <Project
            name='AIC-Photography.info'
            url='https://aic-photography-collection.info'
            stack={aicStack}
            repo_link='https://github.com/agan-k/aic-photography-selection'
            desktop_sshot={['/assets/screen_shots/aic_desktop.jpg', '/assets/screen_shots/aic_desktop1.jpg']}
            tablet_sshot={['/assets/screen_shots/aic_tablet.png']}
            mobile_sshot={['/assets/screen_shots/aic_mobile.png', '/assets/screen_shots/aic_mobile1.png',]}
         />
         <Project
            name='KatarinaOlujic.com'
            url='https://katarina-olujic.netlify.app'
            stack={katStack}
            repo_link='https://github.com/agan-k/katarinaolujic'
            desktop_sshot={['/assets/screen_shots/kat_desktop1.png', '/assets/screen_shots/kat_desktop2.png']}
            // tablet_sshot={['', '']}
            mobile_sshot={['', '']}
         />
         <Project
            name='DominiqueCarre.fr'
            url='https://dominiquecarre.fr'
            stack={domStack}
            repo_link=''
            desktop_sshot={['/assets/screen_shots/dom_desktop.jpg']}
            tablet_sshot={['/assets/screen_shots/dom_tablet.jpg']}
            mobile_sshot={['/assets/screen_shots/dom_mobile.jpg', '/assets/screen_shots/dom_mobile1.jpg',]}
         />
      </div>
   </Layout>
  )
}
