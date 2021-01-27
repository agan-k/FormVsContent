import React from 'react'
import Link from 'next/link'
import style from './project.module.css'

export default function Project(props) {
   console.log(props)
   return (
      <div className={style.container}>
      {/* Project Name */}
      <h2>
         <a href={props.url}>{props.name}</a>
      </h2>
      {/* Stack Used */}
      <h3>Stack:&nbsp;
         {props.stack.map(item => 
            `${item.name} `
         )}
      </h3>
      {/* Stack Logos */} 
      <div className={style.logos}>
         {props.stack.map(item => 
            <img key={item.id} src={item.src} />
         )}
      </div>
         {/* Source Repo */} 
      <div className={style.github_logo}>
         <h3>Source:</h3>
         <a href={props.repo_link}>
            <img src='/assets/github.png' />
         </a>
      </div>
      <div className={style.screenshots}>
         {/* Screen Shots - Desktop */} 
         <div className={style.desktop_screenshots}>
            {props.desktop_sshot.map((item, index) => 
               <img key={index} src={item} width='200' />
            )}
         </div>
         {/* Screen Shots - Tablet && Mobile */} 
         <div className={style.tablet_and_mobile_container}>
            <div className={style.tablet_screenshots}>
               {props.tablet_sshot.map((item, index) => 
                  <img key={index} src={item} width='70' />
               )}
            </div>
            <div className={style.mobile_screenshots}>
               {props.mobile_sshot.map((item, index) => 
                  <img key={index} src={item} width='30' />
               )}
            </div>
         </div>
       </div>
    </div>

   )
}
