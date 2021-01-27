import Layout from '../components/layout'
import Project from '../components/project'

export default function Home() {

   const Stack = [
      { id: 1, name: 'html5', src: '/assets/html5.png' },
      { id: 2, name: 'css3', src: '/assets/css3.png' },
      { id: 3, name: 'javascript', src: '/assets/javascript.png' },
      { id: 4, name: 'react', src: '/assets/reactJS.png' },
      { id: 5, name: 'next', src: '/assets/nextJS.png' },
      { id: 6, name: 'prismic', src: '/assets/prismic-io.jpg' },
      { id: 7, name: 'postgresql', src: '/assets/postgresql.png' },
      { id: 8, name: 'nodeExpress', src: '/assets/nodeAndExpress.png' },
      { id: 9, name: 'jquery', src: '/assets/jQuery.png' },
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
   const laraStack = StackFilter(Stack, 'css3', 'html5', 'javascript', 'react', 'next', 'prismic')
      .map(item => item)
   const rajStack = StackFilter(Stack, 'react', 'javascript')
      .map(item => item)
   const aicStack = StackFilter(Stack, 'react', 'three')
      .map(item => item)
   const katStack = StackFilter(Stack, 'react', 'three')
      .map(item => item)
   const domStack = StackFilter(Stack, 'jquery', 'three',)
      .map(item => item)
   
   
  return (
     <Layout>
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
           desktop_sshot={['/assets/screen_shots/kat1_desktop.png', '/assets/screen_shots/kat1_desktop.png']}
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
     </Layout>
  )
}
