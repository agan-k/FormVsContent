import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown/with-html'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import Layout from '../../components/layout'

const CodeBlock = ({ language, value }) => {
   return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
 };

export default function Post({ content, data }) {
  // This holds the data between `---` from the .md file
   const frontmatter = data
   console.log(data)

  return (
     <Layout>
        <div className='container'>

            {/* <div className='post-list'>
            <BlogHome />
            </div> */}
            <div className='post-container'>
            <h1>{frontmatter.title}</h1>
              <ReactMarkdown
                 escapeHtml={false}
                 source={content}
                 renderers={{ code: CodeBlock }}
              />
              
            </div>
        </div>
        <style jsx>{`
            .container {
               // display: flex;
               // justify-content: space-around;
               color: #495057;
               font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Roboto,
               Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI,Segoe UI Emoji,Segoe UI Symbol,
               Noto Color Emoji;
            }
            .post-list {
               width: 22%;
               // background-color: white;
            }
              
            .post-container {
               width: 80%;
               // padding: 1rem;
               margin: 5rem auto;
               text-align: initial;
               // background-color: white;
            }
            // .container h1 {
            //    margin: 2rem 0 4rem 0;
            //    text-align: center;
            //   }
            .container h2 {
               margin: 4rem;
               color: red;
            }
            
         `}</style>
        
      </Layout>
  )
   
}
Post.getInitialProps = async (context) => {
   const { slug } = context.query
 
   // Import our .md file using the `slug` from the URL
   const content = await import(`../../blog_posts/${slug}.md`)

   // Parse .md data through `matter`
   const data = matter(content.default)

   // Pass data to our component props
   return { ...data }
 
   return { slug }
}
 
