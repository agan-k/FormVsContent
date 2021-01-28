import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/layout'

export default function Post({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data

  return (
     <Layout>
            <h1>{frontmatter.title}</h1>
         <div className='container'>
         <ReactMarkdown source={content} />

        </div>
        <style jsx>{`
            h1 {
                margin: 9rem 0;
               }
            .container {
               width: 80%;
               padding: 1rem;
               margin: 4rem auto;
               text-align: initial;
               background-color: white;
               box-shadow: 0px .5px 2px 0px rgb(207, 207, 207);
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