import { useState, useEffect } from 'react'
import style from './ongoingProject.module.css'

export default function OngoinProject({data}) {
   const [ imgIndex, setImgIndex] = useState()
   return (
      <div className={style.container}>
         <a href={data.url} target='_blank'>
            <span>&#8599;</span>
         </a>

         <h2>
            <a href={data.url}>{data.name}</a>
         </h2>

         <p className={style.project_description}>
            {data.description}
         </p>
         <div className={style.stack_info}>
            {
               data.stack.map((item, index) =>
                  index == imgIndex ? 
                  <h3 key={item.id}>{item.name}</h3> : <h3 key={item.id}></h3>
               )
            }
         </div>

         <div className={style.logos_wrapper}>
            {data.stack.map((item, index) => 
               <div key={item.id} className={style.logo_container}>
                  <img
                     onMouseOver={() => setImgIndex(index)}
                     onMouseOut={() => setImgIndex(null)}
                     src={item.src} />
               </div>
            )}
         </div>

         {data.githubLink && (
            <div className={style.github_logo}>
               <h3>Source:</h3>
               <a href={data.githubLink}>
                  <img src='/assets/github.png' />
               </a>
            </div>
         )}

         <div className={style.screenshots}>
            {data.desktopScreenshot && (
               <div className={style.desktop_screenshots}>
                  {data.desktopScreenshot.map((item, index) => 
                     <img key={item} src={item} width='200' />
                  )}
               </div>
            )}
            <div className={style.tablet_and_mobile_container}>
               {data.tabletScreenshot && (
                  <div className={style.tablet_screenshots}>
                     {data.tabletScreenshot.map((item, index) => 
                        <img key={item} src={item} width='70' />
                     )}
                  </div>
               )}
               {data.mobileScreenshot && (
                  <div className={style.mobile_screenshots}>
                     {data.mobileScreenshot.map((item, index) =>
                        <img key={item} src={item} width='30' />
                     )}
                  </div>
               )}
            </div>
         </div>
      </div>
  )
}