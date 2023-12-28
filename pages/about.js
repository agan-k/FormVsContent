import {useState, useEffect, useRef} from 'react';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import {Layout, UtilityButton, DownloadButton, FlexBox, PdfEmbed} from '../components';
import {AboutContainer, PdfWrapper} from '../styles/about/styled'
import { PageWrapper } from '../styles/styled';
import { useMediaQuery } from '../utils/hooks';
import { MOBILE_BREAKPOINT } from '../utils/constants';

export default function About({dataAbout, dataTimeline, theme, toggleTheme}) {
  const [isOpenPDF, setIsOpenPdf] = useState(false)
  const ref = useRef(null);
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  const about = dataAbout.content;
  const timeline = dataTimeline.content;

  function HandleToggleResumePDF(ref) {
    setIsOpenPdf(!isOpenPDF);
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

   return (
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <PageWrapper>
          <AboutContainer>
            <Markdown>{about}</Markdown>
            <PdfEmbed 
              isOpenPDF={isOpenPDF} 
              isMobile={isMobile}
              HandleToggleResumePDF={HandleToggleResumePDF}
            />
            <br/>
            <br/>
            <Markdown>{timeline}</Markdown>
            <br/>
            <br/>
          </AboutContainer>
        </PageWrapper>
      </Layout>
   );
}

About.getInitialProps = async () => {
  const about = await import('../content/about.md');
  const timeline = await import('../content/timeline.md');
  const dataAbout = matter(about.default );
  const dataTimeline = matter(timeline.default );
  return {dataAbout, dataTimeline};
};
