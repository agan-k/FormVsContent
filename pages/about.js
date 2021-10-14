import React from 'react'
import Layout from '../components/layout'
import style from './about.module.css'

export default function About() {
   return (
      <Layout>
         <div className={style.container}>
            <div className={style.resume_wrapper}>
              <h4 class={style.section_title}>Summary</h4>
              <p>
                Detail-oriented Software Engineer delivering UX /UI design and content development across the E-commerce, 
                entertainment, hospitality, and education industries. Specialized in translating client vision into actionable 
                suggestions, UX roadmaps, and a unique user-journey that grows brands and recognition. Experience front end developer 
                collaborating with stakeholders and design teams to create a tailored customer journey to lead users through improved 
                experiences and deep understanding of the brand.
              </p><br/>
              <p><strong>Languages, Frameworks, Skills ...</strong></p>
              <p>
                HTML5, Liquid, CSS (Sass, Tailwind, CSS-in-JS), JavaScript, React, Next.JS, Express, GraphQL, PostgreSQL, MongoDB, Ruby, 
                RESTful API, Headless CMS, others.  
              </p>
              <br/>
              <h4 class={style.section_title}>Experience</h4>
              <div>
                <div className={style.job_title}>Front End/Shopify Developer</div>
                <p><em>Contract, Softlimit - E-commerce Experts (2021)</em></p>
                <p>
                  Worked closely with a team of developers, designers and project managers to address client needs.
                </p> 
                <ul>
                  <li>
                    Created, enhanced and maintained custom Shopify Plus themes with strong emphasis on performance optimization. 
                  </li>
                  <li>
                    Integrated third party solutions with the existing themes.
                  </li>
                  <li>
                    Translated designs for email marketing campaigns into styled HTML email templates.
                  </li>
                </ul>
              </div><br/>
              
              <div>
                <div className={style.job_title}>Web Developer</div>
                <p><em>Contract, Kworq - Creative Agency (2021)</em></p>
                <p>
                  Collaborated with developers and designers to build agencies’ homepage and enhance clients’ Shopify themes.
                </p> 
                <ul>
                  <li>
                    Translated Figma designs into Web Apps. 
                  </li>
                  <li>
                    Integrated and customized third party apps for the existing Shopify themes.
                  </li>
                </ul>
              </div><br/>
              
              <div>
                <div className={style.job_title}>Web Developer/Software Engineer</div>
                <p><em>Contract, FORM VS CONTENT Studio (2018 - present)</em></p>
                <p>
                  Worked closely with clients to design user friendly solutions for their online presentations and content
                  distributions, while leveraging the latest software engineering tools.
                </p> 
                <ul>
                  <li>
                  Communicate and liaise with client facing teams and decision makers, delivering UX/UI design, content
                  development and content writing to enhance brand voice.
                  </li>
                  <li>
                  Designed an interactive music education learning and development application modeled on movable do solfège;
                  incorporated training and testing methods for upskilling end-users, project leveraged HTML5, CSS and Javascript
                  technologies to develop engaging and accessible user experience
                  </li>
                </ul>
              </div><br/>
              
              <div>
                <div className={style.job_title}>Performer, Composer and Educator</div>
                <p><em>Music, Multiple Brands and Events (2002 - 2019)</em></p>
                <p>
                  Toured internationally and performed major music festivals, collaborating with production companies and brands.
                </p> 
                <ul>
                  <li>
                    Worked as session musician and composed music for film.
                  </li>
                  <li>
                    Taught masterclasses and workshops to lead aspiring professionals through fundamentals, advanced training, 
                    and continuing education topics.
                  </li>
                  <li>
                    Developed and composed several educational materials for publishing outlets and book formats.
                  </li>
                </ul>
              </div><br/>
              
              <h4 class={style.section_title}>Education</h4>
              <p>
                  GENERAL ASSEMBLY, NEW YORK, NY<br/>
                  <em>Software Engineering Immersive</em>
                  <br />
                  BERKLEE COLLEGE OF MUSIC<br/>
                  <em>BM - Performance/Composition</em>
                  <br />
                  EL. ENGINEERING VOCATIONAL, <em>(Bosnia Herzegovina)</em><br/>
                  <em>Associate's degree equivalent</em>
                  <br />
              </p>
              <br/>
              <h4 class={style.section_title}>Other interests</h4>
              <p>
                Blogging, Photography, Music 
                <br />
                Fluent in:&nbsp;
                English, German, Bosnian <em>(Croatian, Serbian)</em>
              </p>
               
            </div>
         </div>
      </Layout>
   )
}
