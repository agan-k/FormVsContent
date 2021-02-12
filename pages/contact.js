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
            {/* <div className={style.contact_box}>

            </div>
            <div className={style.contact_box}>

            </div>
            <div className={style.contact_box}>

            </div> */}
            {/* <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="contact" value="contact" />
               <p>
                  <label for="name">name:</label>
                  <input type="text" id="name" name="name" />
               </p>
               <p>
                  <label for="email">e-mail:</label>
                  <input type="text" id="email" name="email" />
               </p>
               <p>
                  <label for="message">message:</label>
                  <textarea id="message" name="message"></textarea>
               </p>
               <p>
                  <button type="submit">Send</button>
               </p>
            </form> */}
         </div>
      </Layout>
   )
}
