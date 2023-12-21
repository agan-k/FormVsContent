import matter from 'gray-matter';
import Markdown from 'react-markdown';
import {Layout} from '../components';
import {ResumeContainer} from '../styles/resume/styled'
import { DownloadLink } from '../styles/styled';

export default function Resume({content, theme, toggleTheme}) {
   return (
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <ResumeContainer>
          <DownloadLink>
            <a href="/assets/content/resume.pdf" target="_blank">PDF &#x21e9;</a>
          </DownloadLink>
          <Markdown>{content}</Markdown>
        </ResumeContainer>
      </Layout>
   );
}

Resume.getInitialProps = async () => {
  const content = await import(`../content/resume.md`);
  const data = matter(content.default);
  return {...data};
};
