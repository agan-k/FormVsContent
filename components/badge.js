import React from 'react'
import style from './badge.module.css'

export default function Badge() {
   return (
      <div className={style.badge}>
         
         <div className={style.avatar}/>
               <h2>Koran Agan</h2>
               <h3>Web Developer</h3>
               <a href='https://www.linkedin.com/in/koran-agan/' target='_blank'>
                  <img className={style.social} src='/assets/linkedin.png' />
               </a>
               <a href='mailto:koranagan@gmail.com'>
                  <img className={style.social} src='/assets/mail2.png' />
               </a>
               <a href='https://github.com/agan-k'  target='_blank'>
                  <img className={style.social} src='/assets/github_logo.png' />
               </a>
         </div>
   )
}
