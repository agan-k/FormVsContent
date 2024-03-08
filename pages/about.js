import {useState} from 'react';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import {Layout, PdfEmbed} from '../components';
import {AboutContainer} from '../styles/about/styled'
import {PageWrapper} from '../styles/styled';
import {useMediaQuery} from '../utils/hooks';
import {MOBILE_BREAKPOINT} from '../utils/constants';

export default function About({dataAbout, dataTimeline}) {
  const [isOpenPDF, setIsOpenPdf] = useState(false)
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  const about = dataAbout.content;
  const timeline = dataTimeline.content;

  function HandleToggleResumePDF(ref) {
    setIsOpenPdf(!isOpenPDF);
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

   return (
      <Layout >
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
