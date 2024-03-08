import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown/with-html'
import {codeBlock} from '../../utils'
import {Layout} from '../../components'
import {Body, Container, Header, Signature, Title} from '../../styles/posts/styled'

export default function Post({ content, data }) {
   const frontmatter = data

   return(
      <Layout>
         <Container>
            <Body>
               <ReactMarkdown
                  renderers={{ code: codeBlock }}
               >{content}</ReactMarkdown>
            </Body>
            <hr/>
            <Signature>{frontmatter.signature}</Signature>
        </Container>
      </Layout>
  )
   
}
Post.getInitialProps = async (context) => {
   const { slug } = context.query;
   const content = await import(`../../blog_posts/${slug}.md`);
   const data = matter(content.default);
   return { ...data };
}
 
