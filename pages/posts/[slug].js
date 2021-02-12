// import React from 'react'
// import matter from 'gray-matter'
// import ReactMarkdown from 'react-markdown/with-html'
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// import Layout from '../../components/layout'
// import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'; //changing 'esm' distribution to 'cjs' fixed the SyntaxError: Unexpected token 'export'

// const CodeBlock = ({ language, value }) => {
//    return (
//       <SyntaxHighlighter
//          language={language}
//          style={vscDarkPlus}
//       >
//          {value}
//       </SyntaxHighlighter>
//    )
//  }

// export default function Post({ content, data }) {

//    const frontmatter = data

//   return (
//      <Layout>
//         <div className='container'>
//             <div className='post-container'>
//                <div className='title-image'>
//                   <img src={frontmatter.image}/>
//                   <h1>{frontmatter.title}</h1>
//                </div>
//                <span className='date'>{frontmatter.date}</span>&nbsp;<span className='author'>{frontmatter.author}</span>
//                <div className='post-body'>
//                   <ReactMarkdown
//                      escapeHtml={false}
//                      source={content}
//                      renderers={{ code: CodeBlock }}
//                   />
//                </div>
//             </div>
//         </div>
//         <style jsx>{`
//             .container {
            
//             }
//             .post-list {
//                width: 22%;
//             }
//             .post-container {
//                width: 100%;
//                margin: 5rem auto;
//                // text-align: initial;
//             }
//             .post-container h1 {
//                font-size: 2rem;
//                font-weight: 700;
//                line-height: initial;
//                margin: 2rem 0 0 1rem;
//             }
//             .post-container span {
//                font-size: .8rem;
//             }
//             .date {
//                font-style: italic;
//                margin-left: 6rem;
//             }
//             .author {
//                font-weight: 700;
//             }
//             .title-image {
//                display: flex;
//                margin-left: 2rem;
//             }
//             .title-image img {
//                height: 4rem;
//                border-radius: 15%;
//                transform: rotate(-8deg);
//                margin-left: -1rem;
//                box-shadow: 3px 2px 5px 0px grey;
//                border: 2px solid rgb(240, 226, 202);
//             }
//             .post-body {
//                background-color: white;
//                padding: 2rem;
//                font-weight: 400;
//                font-size: .9rem;
//                width: 90%;
//                margin: 2rem 0 2rem 10%;
//             }
//             .post-body p a {
//                color: red;
//             }
//             @media only screen and (max-width: 414px) {
//                .post-container {
//                   margin-top: 2rem;
//                   margin-bottom: 0;
//                }
//                .post-container h1 {
//                   font-size: 1.1rem;
//                   font-weight: 600;
//                   margin: 1rem .3rem .3rem .3rem;
//                }
//                .date {
//                   margin: 0 .3rem;
//                }
//                .title-image {
//                   display: initial;
//                   width: 100%;
//                   margin: 0 auto;
//                }
//                .title-image img {
//                   display: block;
//                   margin: 0 auto;
//                }
//                .post-body {
//                   margin: 1rem 0;
//                   width: 100%;
//                   padding: .7rem;
//                }
//             }
            
//          `}</style>
        
//       </Layout>
//   )
   
// }
// Post.getInitialProps = async (context) => {
//    const { slug } = context.query
 
//    // Import .md file using the `slug` from the URL
//    const content = await import(`../../blog_posts/${slug}.md`)

//    // Parse .md data through `matter`
//    const data = matter(content.default)

//    // Pass data to component props
//    return { ...data }
 
//    return { slug }
// }
 
