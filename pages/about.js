import React from 'react'
import Layout from '../components/layout'
import Badge from '../components/badge'
import style from './about.module.css'

export default function About() {
   return (
      <Layout>
         <div className={style.container}>
            {/* <Badge /> */}
            <div className={style.resume_wrapper}>
               <h4>Summary</h4>
                  <p>
                     Detail-oriented Software Engineer delivering UX /UI design and content development across the entertainment, hospitality, and
                     education industries. Specialized in translating client vision into actionable suggestions, UX roadmaps, and a unique user-journey
                     that grows brands and recognition. Experienced front end developer collaborating with stakeholders and design teams to create a
                     tailored customer journey to lead users through improved experiences and deep understanding of the brand.
                  </p>
                  <p><strong>Languages, Frameworks, Skills ...</strong>
                     <br />
                     HTML5, CSS3, JavaScript, React.JS, Next.JS, Express, PostgreSQL, MongoDB, Ruby, RESTful API, Headless CMS, others  
                  </p>
                  <br/>
               <h4>Experience</h4>
                  <p className={style.job_title}>Web Developer/Software Engineer</p>
                  <p>
                  <em>Contract, FORM VS CONTENT Studio (2018 - present) </em><br/>
                  Worked closely with clients to design user friendly solutions for their online presentations and content
                  distributions, while leveraging the latest software engineering tools. <br/>
                     <ul>
                        <li>
                        Communicate and liaise with client facing teams and decision makers, delivering UX/UI design, content
                        development and content writing to enhance brand voice.
                        </li>
                        <li>
                        Created marketing website with CMS to increase exposure via online presence by developing concept and
                        design of web application to distribute and sell merchandise, integrated into third-party online store.
                        </li>
                        <li>
                        Designed an interactive music education learning and development application modeled on movable do solfège;
                        incorporated training and testing methods for upskilling end-users, project leveraged HTML5, CSS and Javascript
                        technologies to develop engaging and accessible user experience
                        </li>
                        <li>
                        Identified opportunity to leverage Art Institute of Chicago public API to create a responsive image gallery
                        for 3 different browsers by extracting image data and centralizing access.
                        </li>
                     
                     </ul>
               </p>
               <p className={style.job_title}>Performer, Composer and Educator</p>
                  <p>
                  <em>Music, Multiple Brands and Events, (2002 - 2018)</em><br />
                  Toured internationally and performed major music festivals, collaborating with production companies and brands. 
                     <ul>
                        <li>Worked as session musician and composed music for film</li>
                        <li>Taught masterclasses and workshops to lead aspiring professionals
                            through fundamentals, advanced training, and continuing education topics.</li>
                        <li>Developed and composed several educational materials for publishing outlets and book formats.  </li>
                     </ul>
                  </p>
                   
                  <p className={style.job_title}>Facilities Instrumentation and Controls Technician</p>
                  <p>
                  <em>MICRON TECHNOLOGY (1998)</em><br />
                  Charged with overseeing full project scope of work, defining maintenance, modification, and repair
                  protocols for instrument control systems components.
                     <ul>
                        <li>Maintained workflows across the entire process, managed issue and project log to communicate
                        status with the supervisor.
                        </li>
                        <li>Managed testing process communication with other team members for timed and seamless
                           delivery, focused on strong customer focus and build effective relationships with cross-functional teams.
                        </li>
                     </ul>
                  </p>
                  <br/>
                  
                  <h4>Education</h4>
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
                  <h4>Other interests</h4>
                  <p>
                     Blogging, Photography, Music 
                     <br />
                     <strong>Fluent in:</strong>&nbsp;
                     English, German, Bosnian <em>(Croatian, Serbian)</em>
                  </p>
               
               </div>
         </div>
      </Layout>
   )
}
