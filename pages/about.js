import {useState, useEffect, useRef} from 'react';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import {Layout, UtilityButton, DownloadButton, FlexBox} from '../components';
import {AboutContainer, PdfWrapper} from '../styles/about/styled'
import { PageWrapper } from '../styles/styled';

export default function About({dataAbout, dataTimeline, theme, toggleTheme}) {
  const [isOpenPDF, setIsOpenPdf] = useState(false)
  const ref = useRef(null)
  const about = dataAbout.content;
  const timeline = dataTimeline.content;
  function ToggleOpenResumePDF() {
    setIsOpenPdf(!isOpenPDF);
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

   return (
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <PageWrapper>
          <AboutContainer>
            <Markdown>{about}</Markdown>
            <PdfWrapper isOpenPDF={isOpenPDF} >
              <h3 ref={ref}>Resume</h3>
              <FlexBox>
                <UtilityButton onClick={() => ToggleOpenResumePDF()}>
                  {isOpenPDF ? 'Collapse' : 'Expand'}
                </UtilityButton>
                <DownloadButton path={'/assets/content/Resume_Koran_Agan.pdf'}>
                  Download
                </DownloadButton>
              </FlexBox>
              <object data="/assets/content/Resume_Koran_Agan.pdf" type="application/pdf" width="100%" height="100%">
                <p>Unable to display PDF file. <a href="/assets/content/Resume_Koran_Agan.pdf">Download</a> instead.</p>
              </object>
              {isOpenPDF && (
                <UtilityButton onClick={() => ToggleOpenResumePDF()}>
                  Collapse
                </UtilityButton>
              )}     
            </PdfWrapper>
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
