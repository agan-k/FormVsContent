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
      <h3>
         {props.stack.map(item => 
            `${item.name} `
         )}
      </h3>
      {/* Stack Logos */} 
      <div className={style.logos}>
         {props.stack.map(item => 
            <img key={item.id} src={item.src} height='50'/>
         )}
      </div>
         
         {/* Source Repo */} 
         
      <div className={style.github_logo}>
         <h3>Source:</h3>
         <a href={props.repo_link}>
            <img src='/assets/github.png' height='50' />
         </a>
      </div>
         
         {/* Screen Shots - Desktop */} 
         
      <div className={style.screenshots}>
         <div className={style.desktop_screenshots}>
            {props.desktop_sshot.map((item, index) => 
               <img key={index} src={item} width='200' />
            )}
          </div>
            
            {/* Screen Shots - Tablet */} 
            
          <div className={style.tablet_screenshots}>
            {props.tablet_sshot.map((item, index) => 
               <img key={index} src={item} width='70' />
            )}
          </div>
            {/* Screen Shots - Mobile */} 
            
          <div className={style.mobile_screenshots}>
            {props.mobile_sshot.map((item, index) => 
               <img key={index} src={item} width='30' />
            )}
          </div>
       </div>
    </div>

   )
}
