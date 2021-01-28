import Layout from '../components/layout'
import Project from '../components/project'
import style from './index.module.css'
import Head from 'next/head'

export default function Home() {

   const stackData = [
      { id: 1, name: 'HTML5', src: '/assets/html5.png' },
      { id: 2, name: 'CSS3', src: '/assets/css3.png' },
      { id: 3, name: 'JavaScript', src: '/assets/javascript.png' },
      { id: 4, name: 'ReactJS', src: '/assets/reactJS.png' },
      { id: 5, name: 'NextJS', src: '/assets/nextJS.png' },
      { id: 6, name: 'API', src: '' },
      { id: 7, name: 'CMS', src: '' },
      { id: 8, name: 'Prismic', src: '/assets/prismic-io.jpg' },
      { id: 9, name: 'PostgreSQL', src: '/assets/postgresql.png' },
      { id: 10, name: 'NodeExpress', src: '/assets/nodeAndExpress.png' },
      { id: 11, name: 'jQuery', src: '/assets/jQuery.png' },
   ]
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
   const laraStack = StackFilter(stackData, 'CSS3', 'HTML5', 'JavaScript', 'ReactJS', 'NextJS', 'CMS', 'Prismic')
      .map(item => item)
   const rajStack = StackFilter(stackData, 'ReactJS', 'JavaScript', 'CSS3', 'HTML5')
      .map(item => item)
   const aicStack = StackFilter(stackData, 'ReactJS', 'JavaScript', 'CSS3', 'HTML', 'API')
      .map(item => item)
   const katStack = StackFilter(stackData, 'ReactJS', 'JavaScript', 'HTML', 'CSS3')
      .map(item => item)
   const domStack = StackFilter(stackData, 'jQuery', 'HTML5', 'CSS3')
      .map(item => item)
   
   
   return (
    <Layout>
     <Head>
            <title>FC</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet"/>
         </Head>
      <div className={style.container}>
         <div className={style.badge}>
            <img src='/assets/sailin.jpg'/>
            <h2>Koran Agan</h2>
            <h3>Web Developer | Software Engineer</h3>
         </div>
         <h1>Current Projects</h1>
         <Project
            name='LaraBello.com'
            url='https://larabello.com'
            stack={laraStack}
            repo_link='https://github.com/agan-k/lara'
            desktop_sshot={['/assets/screen_shots/lara_desktop1.jpg', '/assets/screen_shots/lara_desktop2.jpg']}
            tablet_sshot={['', '']}
            mobile_sshot={['', '']}
         />
         <Project
            name='RajivJayaveera.com'
            url='https://rajivJayaweera.com'
            stack={rajStack}
            repo_link='https://github.com/agan-k/raj'
            desktop_sshot={['/assets/screen_shots/raj_desktop.jpg', '/assets/screen_shots/raj_desktop1.jpg']}
            tablet_sshot={['', '']}
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
            tablet_sshot={['', '']}
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
