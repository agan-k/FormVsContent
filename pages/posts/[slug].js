import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown/with-html'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {Layout} from '../../components'
import style from './slug.module.css'
//changing 'esm' distribution to 'cjs' fixed the SyntaxError: Unexpected token 'export'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'; 

const CodeBlock = ({ language, value }) => {
   return (
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
         {value}
      </SyntaxHighlighter> 
   )
 }

export default function Post({ content, data }) {
   const frontmatter = data

  return (
     <Layout>
        <div className={style.container}>
            <div className={style.post_container}>
               <div className={style.title_image}>
                  <img src={frontmatter.image}/>
                  <h1>{frontmatter.title}</h1>
               </div>
               <h3 className={style.subtitle}>{frontmatter.subtitle}</h3>
               <span className={style.date}>{frontmatter.date}</span>&nbsp;
               <span className={style.author}>{frontmatter.author}</span>
               <div className={style.post_body}>
                  <ReactMarkdown
                     escapeHtml={false}
                     source={content}
                     renderers={{ code: CodeBlock }}
                  />
               </div>
               <hr/>
               <span className={style.signature}>{frontmatter.signature}</span>
            </div>
        </div>
      </Layout>
  )
   
}
Post.getInitialProps = async (context) => {
   console.log(context)
   const { slug } = context.query
 
   // Import .md file using the `slug` from the URL
   const content = await import(`../../blog_posts/${slug}.md`)

   // Parse .md data through `matter`
   const data = matter(content.default)

   // Pass data to component props
   return { ...data }
}
 
