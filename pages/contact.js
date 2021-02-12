import React from 'react'
import Layout from '../components/layout'
import style from './contact.module.css'

export default function Contact() {
   return (
      <Layout>
         <div className={style.container}>
            <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="contact" value="contact" />
               <p>
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" />
               </p>
               <p>
                  <label for="email">Email:</label>
                  <input type="text" id="email" name="email" />
               </p>
               <p>
                  <label for="message">Message:</label>
                  <textarea id="message" name="message"></textarea>
               </p>
               <p>
                  <button type="submit">Send</button>
               </p>
            </form>
         </div>
      </Layout>
   )
}
