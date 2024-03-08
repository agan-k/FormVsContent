import {useState} from 'react';
import {GetStaticProps} from 'next'
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import {Layout, PdfEmbed} from '../components';
import {AboutContainer} from '../styles/about/styled'
import {PageWrapper} from '../styles/styled';
import {useMediaQuery} from '../utils/hooks';
import {MOBILE_BREAKPOINT} from '../utils/constants';

interface AboutProps {
  dataAbout: any
  dataTimeline: any
}

export const About: React.FC<AboutProps> = ({dataAbout, dataTimeline}) => {
  const [isOpenPDF, setIsOpenPdf] = useState(false)
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  console.log('here: ', dataAbout)

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
};

//@ts-expect-error
About.getInitialProps = async () => {
  //@ts-expect-error
  const about = await import('../content/about.md');
  //@ts-expect-error
  const timeline = await import('../content/timeline.md');
  const dataAbout = matter(about.default );
  const dataTimeline = matter(timeline.default );
  return {
    dataAbout, dataTimeline
  }
}
