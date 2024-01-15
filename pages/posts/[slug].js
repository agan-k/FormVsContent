import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown/with-html'
import {codeBlock} from '../../utils'
import {Layout} from '../../components'
import {Body, Container, Header, Signature, Title} from '../../styles/posts/styled'

export default function Post({ content, data, theme, toggleTheme }) {
   const frontmatter = data

   return(
      <Layout theme={theme} toggleTheme={toggleTheme}>
         <Container>
            <Header>
               <img src={frontmatter.image}/>
               <Title>
                  <h2>{frontmatter.title}</h2>
                  <h3>{frontmatter.subtitle}</h3>
               </Title>
            </Header>
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
 
