import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown/with-html'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import Layout from '../../components/layout'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'; //changing 'esm' distribution to 'cjs' fixed the SyntaxError: Unexpected token 'export'

const CodeBlock = ({ language, value }) => {
   return (
      <SyntaxHighlighter
         language={language}
         style={vscDarkPlus}
      >
         {value}
      </SyntaxHighlighter>
   )
 }

export default function Post({ content, data }) {

   const frontmatter = data

  return (
     <Layout>
        <div className='container'>

            {/* <div className='post-list'>
            <BlogHome />
            </div> */}
            <div className='post-container'>
               <div className='title-image'>
                  <img src={frontmatter.image}/>
                  <h1>{frontmatter.title}</h1>
               </div>
               <span className='date'>{frontmatter.date}</span>&nbsp;<span className='author'>{frontmatter.author}</span>
               <div className='post-body'>
                  <ReactMarkdown
                     escapeHtml={false}
                     source={content}
                     renderers={{ code: CodeBlock }}
                  />
               </div>
            </div>
        </div>
        <style jsx>{`
            .container {
            
            }
            .post-list {
               width: 22%;
            }
            .post-container {
               width: 100%;
               // padding: 1rem;
               margin: 5rem auto;
               text-align: initial;
               // background-color: white;
            }
            .post-container h1 {
               font-size: 2rem;
               font-weight: 700;
               line-height: initial;
               margin: 2rem 0 0 1rem;
            }
            .post-container span {
               font-size: .8rem;
            }
            .date {
               font-style: italic;
               margin-left: 6rem;
            }
            .author {
               font-weight: 700;
            }
            .title-image {
               display: flex;
               margin-left: 2rem;
            }
            .title-image img {
               height: 4rem;
               border-radius: 15%;
               transform: rotate(-8deg);
               margin-left: -1rem;
               box-shadow: 3px 2px 5px 0px grey;
               border: 2px solid rgb(240, 226, 202);
            }
            .post-body {
               font-weight: 400;
               font-size: .9rem;
               width: 70%;
               margin-left: 6rem;
            }
            .post-body p a {
               color: red;
            }
            
            
         `}</style>
        
      </Layout>
  )
   
}
Post.getInitialProps = async (context) => {
   const { slug } = context.query
 
   // Import .md file using the `slug` from the URL
   const content = await import(`../../blog_posts/${slug}.md`)

   // Parse .md data through `matter`
   const data = matter(content.default)

   // Pass data to component props
   return { ...data }
 
   return { slug }
}
 
