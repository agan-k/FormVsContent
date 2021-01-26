import React from 'react'
import Link from 'next/link'
import style from './project.module.css'

export default function Project() {
   return (
      <div className={style.container}>
      <h2>
          <a href={props.url}>LaraBello.com</a>
      </h2>
      <h3>Stack: ReactJS, NextJS, API (Prismic CMS), JavaScript, CSS</h3>
         <div className={style.logos}>
            {/* map trough images, make a list of relevant logos in 
            index.js and pass to the corresponding project  */}
         {props.logos}
         
       </div>
       <div className={style.github_logo}>
          <h3>Source:</h3>
         <a href={props.repo_link}>
            <img src='/assets/github.png' />
         </a>
       </div>

       <div className={style.screenshots}>
          <div className={style.desktop_screenshots}>
            {/* map trough images, make a list of relevant logos in 
            index.js and pass to the corresponding project  */}
            {props.desktopScreenShots}
          </div>
          <div className={style.mobile_screenshots}>
            {/* map trough images, make a list of relevant logos in 
            index.js and pass to the corresponding project  */}
            {props.mobileScreenShots}
          </div>
       </div>
    </div>

   )
}
