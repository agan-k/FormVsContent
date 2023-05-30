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
const renofiQualifyStack = StackFilter(stackData, 'ReactJS', 'Styled Components', 'GraphQL', 'Jest')
  .map(item => item)
const kworqStack = StackFilter(stackData, 'Tailwind', 'NextJS', 'TypeScript', 'Headless CMS')
  .map(item => item)
const lamoreStack = StackFilter(stackData, 'Sass', 'Liquid', 'JavaScript')
  .map(item => item)
const sloohStack = StackFilter(stackData, 'CSS3', 'HTML5', 'JavaScript')
  .map(item => item)
const laraStack = StackFilter(stackData, 'CSS3', 'HTML5', 'JavaScript', 'ReactJS', 'NextJS', 'API', 'Headless CMS')
  .map(item => item)
const rajStack = StackFilter(stackData, 'CSS3', 'HTML5', 'JavaScript', 'ReactJS', 'NextJS', 'API', 'Headless CMS')
  .map(item => item)
const aicStack = StackFilter(stackData, 'ReactJS', 'JavaScript', 'CSS3', 'HTML', 'API')
  .map(item => item)
const katStack = StackFilter(stackData, 'ReactJS', 'JavaScript', 'HTML', 'CSS3')
  .map(item => item)
const domStack = StackFilter(stackData, 'JavaScript', 'HTML5', 'CSS3')
  .map(item => item)



const data = [
  {
    stack: renofiQualifyStack,
    url: 'https://qualify.renofi.com/',
    name: 'Renofi Qualify App',
    description: 'Renovation Finance LLC - Client facing Web App',
    tools: ['React', 'JavaScript', 'Saas', 'Headless CMS'],
    // githubLink: '',
    desktopScreenshot: ['/assets/screen_shots/renofi_qualify.png'],
    mobileScreenshot: null,
    tabletScreenShot: null,
  },
  {
    stack: renofiStack,
    url: 'https://renofi.com',
    name: 'renofi.com',
    description: 'Renovation Finance LLC - Homepage Blog',
    tools: ['Hugo', 'JavaScript', 'Saas', 'Headless CMS'],
    // githubLink: '',
    desktopScreenshot: ['/assets/screen_shots/renofi.gif'],
    mobileScreenshot: null,
    tabletScreenShot: null,
  },
  {
    stack: rajStack,
    url: 'https://rajivJayaweera.com',
    name: 'RajivJayaveera.com',
    description: 'Music artist profile web app. Headless CMS, responsive design, third party music distribution integration, form submission.',
    tools: ['CSS3', 'HTML5', 'JavaScript', 'ReactJS', 'NextJS', 'API', 'Prismic CMS'],
    // githubLink: '',
    desktopScreenshot: ['/assets/screen_shots/raj_desktop.jpg', '/assets/screen_shots/raj_desktop1.jpg'],
    mobileScreenshot: ['/assets/screen_shots/raj_mobile.jpg', '/assets/screen_shots/raj_mobile1.jpg',
    '/assets/screen_shots/raj_mobile2.jpg', '/assets/screen_shots/raj_mobile3.jpg',],
    tabletScreenShot: null,
  },
  {
    stack: lamoreStack,
    url: 'https://lamoredesign.com',
    name: 'Lamoredesign.com',
    description: 'Custom PDP for a Shopify Plus store.',
    tools: ['Sass', 'Liquid', 'JavaScript'],
    // githubLink: 'github',
    desktopScreenshot: ['/assets/screen_shots/lamore.png'],
    mobileScreenshot: null,
    tabletScreenShot: null,
  },
  {
    stack: sloohStack,
    url: 'https://slooh.app',
    name: 'slo͞oh.app',
    description: 'Interactive ear-training tool with built-in algorithmic logic based on the "movable do" method.',
    tools: ['CSS3', 'HTML5', 'JavaScript'],
    // githubLink: '',
    desktopScreenshot: ['/assets/screen_shots/slooh.png'],
    mobileScreenshot: null,
    tabletScreenShot: null,
  },
  {
    stack: kworqStack,
    url: 'https://kworq.com',
    name: 'kworq.com',
    description: 'Creative agency homepage',
    tools: ['Tailwind', 'NextJS', 'TypeScript', 'Prismic CMS'],
    // githubLink: '',
    desktopScreenshot: ['/assets/screen_shots/kworq.png'],
    mobileScreenshot: null,
    tabletScreenShot: null,
  },
  {
    stack: laraStack,
    url: 'https://larabello.com',
    name: 'LaraBello.com',
    description: 'Artist profile',
    tools: ['CSS3', 'HTML5', 'JavaScript', 'ReactJS', 'NextJS', 'API', 'Prismic CMS'],
    // githubLink: '',
    desktopScreenshot: ['/assets/screen_shots/lara_desktop1.jpg', '/assets/screen_shots/lara_desktop2.jpg'],
    mobileScreenshot: null,
    tabletScreenShot: null,
  },
  {
    stack: aicStack,
    url: 'https://aic-photography-collection.info',
    name: 'AIC-Photography.info',
    description: 'Educational photography hub featuring selected artwork from the Art Institute Of Chicago public API.',
    tools: ['ReactJS', 'JavaScript', 'CSS3', 'HTML', 'API'],
    // githubLink: '',
    desktopScreenshot: ['/assets/screen_shots/aic_desktop.jpg', '/assets/screen_shots/aic_desktop1.jpg'],
    mobileScreenshot: ['/assets/screen_shots/aic_tablet.png'],
    tabletScreenShot: ['/assets/screen_shots/aic_mobile.png', '/assets/screen_shots/aic_mobile1.png',],
  },
]
export default data