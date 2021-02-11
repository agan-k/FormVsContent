import React from 'react'
import Layout from '../components/layout'
import Badge from '../components/badge'
import style from './about.module.css'

export default function About() {
   return (
      <Layout>
         <div className={style.container}>
            <Badge />
               <div className={style.resume_wrapper}>
                  <p><strong>Summary</strong>
                     <br />
                     <br />
                     I am a detail-oriented Software Engineer who holds over 15 years of experience in music industry and music 
                     education. My background helps me translate abstract ideas into simplistic and comprehensive symbolic 
                     language and for the past several years I have used these skills to help a diverse group of clients improve 
                     their online presence. I leverage my experience as both creator and educator when producing high-quality and 
                     intuitive products with real users in mind.
                  </p>
                  <br/><br/>
                  <p><strong>Languages, Frameworks, Skills ...</strong>
                     <br />
                     <br />
                     HTML5, CSS3, JavaScript, React, Next, Express, PostgreSQL, MongoDB, Ruby, RESTful API, Headless CMS, others  
                  </p>
                  <br/>
                  <p><strong>Experience</strong>
                     <br /><br />
                     FORM VERSUS CONTENT - (2018 - present)<br/>
                     <em>Independent Contractor - Web Developer/Software Engineer</em><br />
                     <ul>
                        <li>
                           Worked closely with clients to design user friendly solutions for their online presentations and content
                           distributions, while leveraging the latest software engineering tools.
                        </li>
                        <li>
                           Experience in client facing skills, UX/UI design and content development/writing.
                        </li>

                     </ul>
                     <br/>
                     MUSICIAN  - (2002 - 2018)<br />
                     <em>Performer, Composer and Educator</em><br />
                     <ul>
                        <li>Toured internationally and performed major music festivals</li>
                        <li>Worked as session musician and composed music for film</li>
                        <li>Gave masterclasses, workshops and published educational materials</li>
                     </ul>
                     <br/>
                     MICRON TECHNOLOGY - (1998)<br />
                     <em>Facilities Instrumentation and Controls Technician</em><br />
                     <ul>
                        <li>Service, maintenance, modification and repair of instrumentation and controls
                           systems components for a state-of-the-art semiconductor FAB</li>
                        <li>High level of service with strong customer focus and build effective relationships
                           with supported teams
                        </li>
                     </ul>
                  </p>
                  <br/>
                  <p>
                     <strong>Education</strong>
                     <br /><br />
                     GENERAL ASSEMBLY, NEW YORK, NY - (2020)<br/>
                     <em>Software Engineering Immersive</em>
                     <br /><br />
                     BERKLEE COLLEGE OF MUSIC - (2002)<br/>
                     <em>BM - Performance/Composition</em>
                     <br /><br />
                     EL. ENGINEERING VOCATIONAL, BOSNIA HERZEGOVINA - (1995)<br/>
                     <em>Associate's degree equivalent</em>
                     <br />
                     <br />
                     <br />
                     <strong>Other interests</strong>
                     <br />
                     <br />
                     Blogging, Photography, Music 
                     <br />
                     <br />
                     <strong>Fluent in:</strong>&nbsp;
                     English, German, Bosnian <em>(Croatian, Serbian)</em>
                  </p>
               
               </div>
         </div>
      </Layout>
   )
}
