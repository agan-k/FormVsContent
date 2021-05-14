import React from 'react'
import { useState } from 'react'

import style from './project.module.css'


export default function Project(props) {
   const [ imgIndex, setImgIndex] = useState()
   return (
      <div className={style.container}>
         {/* Project Outside Link */}
         <a href={props.url} target='_blank'>
                  {/* <span>&#8594;</span> */}
                  <span>&#8599;</span>
         </a>
         {/* Project Name */}
         <h2>
         {/* {props.name} */}
            <a href={props.url}>{props.name}</a>
         </h2>
         {/* Project Description */}
         <p className={style.project_description}>
         {props.description}
         </p>
         {/* Stack Used */}
         {/* <h3>Stack:&nbsp;
            {props.stack.map(item => 
               `${item.name} `
            )}
         </h3> */}

         <div className={style.stack_info}>
            {props.stack.map((item, index) =>
                  index == imgIndex ?
                     <h3>{item.name}</h3> :
                     <h3></h3>
                     )}
         </div>

         {/* Stack Logos */} 
         <div className={style.logos_wrapper}>
            {props.stack.map((item, index) => 
               <div className={style.logo_container}>
                  <img
                     onMouseOver={() => setImgIndex(index)}
                     onMouseOut={() => setImgIndex(null)}
                     key={item.id} src={item.src} />
               </div>
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
            <div className={style.desktop_screenshots}>
               {props.desktop_sshot.map((item, index) => 
                  <img key={index} src={item} width='200' />
               )}
            </div>
            {/* Screen Shots - Tablet && Mobile */} 
            <div className={style.tablet_and_mobile_container}>
               {/* Screen Shots - Desktop */} 
            {props.tablet_sshot && (
               <div className={style.tablet_screenshots}>
                  {props.tablet_sshot.map((item, index) => 
                     <img key={index} src={item} width='70' />
                  )}
               </div>
            )}
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
