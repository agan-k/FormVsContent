import React from 'react'
import Layout from '../components/layout'
import style from './contact.module.css'

export default function Contact() {
   return (
      <Layout>
         <div className={style.container}>
            <div className={style.contact_box}>
               <p>e-mail: koranagan@gmail.com</p>
               <p><a href='https://www.linkedin.com/in/koran-agan/' target='_blank'>Linkedin</a></p>
               <p><a href='https://github.com/agan-k' target='_blank'>GitHub</a></p>
            </div>
         </div>
      </Layout>
   )
}
