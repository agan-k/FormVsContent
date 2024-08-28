import stackData from './stackData'


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
const renofiStack = StackFilter(stackData, 'Hugo', 'Sass', 'JavaScript', 'Headless CMS')
  .map(item => item)
const renofiQualifyStack = StackFilter(stackData, 'TypeScript','ReactJS', 'Styled Components', 'GraphQL', 'Jest')
  .map(item => item)
const kworqStack = StackFilter(stackData, 'Tailwind', 'NextJS', 'TypeScript', 'Headless CMS')
  .map(item => item)
const lamoreStack = StackFilter(stackData, 'Sass', 'Liquid', 'JavaScript')
  .map(item => item)
const sloohStack = StackFilter(stackData, 'CSS', 'HTML5', 'JavaScript')
  .map(item => item)
const laraStack = StackFilter(stackData, 'NextJS', 'Headless CMS')
  .map(item => item)
const rajStack = StackFilter(stackData, 'NextJS', 'TypeScript', 'Headless CMS', 'Styled Components', 'Jest')
  .map(item => item)
const aicStack = StackFilter(stackData, 'ReactJS', 'JavaScript', 'CSS3', 'HTML', 'API')
  .map(item => item)
const katStack = StackFilter(stackData, 'ReactJS', 'JavaScript', 'HTML', 'CSS3')
  .map(item => item)
const domStack = StackFilter(stackData, 'ReactJS', 'Headless CMS', 'Styled Components', 'Jest', 'Parcel')
  .map(item => item)
const nycDiverStack = StackFilter(stackData, 'HTML5', 'CSS', 'JavaScript', 'Django', 'PostgreSQL', 'Webpack')
  .map(item => item)
const poppasMusicStack = StackFilter(stackData, 'HTML5', 'CSS', 'JavaScript', 'Liquid', 'Python', 'Shopify')
  .map(item => item)
const formVscStack = StackFilter(stackData, 'TypeScript', 'NextJS', 'Styled Components')
.map(item => item)

const data = [
  {
    stack: formVscStack,
    url: 'https://github.com/agan-k/formVsContent',
    name: 'FormVsContent',
    description: 'Source of this site',
    githubLink: 'https://github.com/agan-k/formVsContent',
    floatingImage: null,
    desktopScreenshot: ['/assets/screen_shots/formvsc/formvsc.png'],
    mobileScreenshot: null,
    tabletScreenshot: null,
  },
  {
    stack: poppasMusicStack,
    url: 'https://www.poppasmusic.com/',
    name: "Poppa's Music",
    description: 'Music retail',
    githubLink: '',
    floatingImage: '',
    desktopScreenshot: ['/assets/screen_shots/poppas-music/poppas-music.png'],
    mobileScreenshot: null,
    tabletScreenshot: null,
  },
  {
    stack: nycDiverStack,
    url: 'https://www.nycdiver.com/',
    name: 'NYC Diver',
    description: 'Deep dive into New York City events.<br/> <strong>NYC Diver</strong> &#129343; compiles lists of events from select venues and<br/> saves member submitted events.&#128640;<br/><br/> Full stack web app - content aggregator,<br/> database, user creation, authentication, event submission and management.',
    githubLink: 'https://github.com/agan-k/nycdiver',
    floatingImage: ['/assets/screen_shots/nycdiver/logout.png', '/assets/screen_shots/nycdiver/manage.png'],
    desktopScreenshot: ['/assets/screen_shots/nycdiver/nycdiver.jpg'],
    mobileScreenshot: null,
    tabletScreenshot: null,
  },
  {
    stack: rajStack,
    url: 'https://rajivJayaweera.com',
    name: 'RajivJayaweera.com',
    description: 'Music artist profile web app. Headless CMS, responsive design, third party music distribution integration, form submission.',
    githubLink: 'https://github.com/agan-k/raj-jay',
    floatingImage: null,
    desktopScreenshot: ['/assets/screen_shots/raj-jay/raj-screen.png'],
    mobileScreenshot: null,
    tabletScreenshot: null,
  },
  {
    stack: renofiQualifyStack,
    url: 'https://qualify.renofi.com/',
    name: 'Renofi Qualify App',
    description: 'Renovation Finance LLC - Client facing Web App',
    githubLink: null,
    floatingImage: null,
    desktopScreenshot: ['/assets/screen_shots/renofi/renofi_qualify.png'],
    mobileScreenshot: null,
    tabletScreenshot: null,
  },
  {
    stack: renofiStack,
    url: 'https://renofi.com',
    name: 'renofi.com',
    description: 'Renovation Finance LLC - Homepage Blog',
    githubLink: null,
    floatingImage: null,
    desktopScreenshot: ['/assets/screen_shots/renofi/renofi.gif'],
    mobileScreenshot: null,
    tabletScreenshot: null,
  },
  {
    stack: lamoreStack,
    url: 'https://lamoredesign.com',
    name: 'Lamoredesign.com',
    description: 'Custom PDP for a Shopify Plus store.',
    githubLink: null,
    floatingImage: null,
    desktopScreenshot: ['/assets/screen_shots/lamore/lamore.png'],
    mobileScreenshot: null,
    tabletScreenshot: null,
  },
  {
    stack: sloohStack,
    url: 'https://slooh.app',
    name: 'slo͞oh.app',
    description: 'Interactive ear-training tool based on the "movable do" method.',
    githubLink: null,
    floatingImage: null,
    desktopScreenshot: ['/assets/screen_shots/slooh/slooh.png'],
    mobileScreenshot: null,
    tabletScreenshot: null,
  },
  {
    stack: kworqStack,
    url: 'https://kworq.com',
    name: 'kworq.com',
    description: 'Creative agency homepage',
    githubLink: null,
    floatingImage: null,
    desktopScreenshot: ['/assets/screen_shots/kworq/kworq.png'],
    mobileScreenshot: null,
    tabletScreenshot: null,
  },
  {
    stack: laraStack,
    url: 'https://larabello.com',
    name: 'LaraBello.com',
    description: 'Artist profile',
    githubLink: null,
    floatingImage: null,
    desktopScreenshot: ['/assets/screen_shots/lara/lara_desktop1.jpg', '/assets/screen_shots/lara/lara_desktop2.jpg'],
    mobileScreenshot: null,
    tabletScreenshot: null,
  },
  {
    stack: domStack,
    url: 'https://deluxe-croissant-c10389.netlify.app/',
    name: 'DominiqueCarre.fr',
    description: 'Music artist profile web app. Headless CMS, responsive design, form submission.',
    githubLink: 'https://github.com/agan-k/carre1',
    floatingImage: null,
    desktopScreenshot: ['/assets/screen_shots/carre/dominique_desktop.jpg'],
    mobileScreenshot: null,
    tabletScreenshot: null,
  },
  {
    stack: aicStack,
    url: 'https://aic-photography-collection.info',
    name: 'AIC-Photography.info',
    description: 'Educational photography hub featuring selected artwork from the Art Institute Of Chicago public API.',
    githubLink: null,
    floatingImage: null,
    desktopScreenshot: ['/assets/screen_shots/aic/aic_desktop.jpg', '/assets/screen_shots/aic/aic_desktop1.jpg'],
    mobileScreenshot: null,
    tabletScreenshot: null,
  },
]
export default data