import { useRef } from 'react';
import {UtilityButton, DownloadButton, FlexBox} from '..';
import { PdfWrapper } from './styled';

interface PdfEmbedProps {
  isOpenPDF: boolean
  isMobile: boolean
  HandleToggleResumePDF: (event: React.MutableRefObject<any>) => void
}

export const PdfEmbed: React.FC<PdfEmbedProps> = ({
  isOpenPDF, 
  isMobile, 
  HandleToggleResumePDF
}) => {
  const ref = useRef(null);
  return(
    <>
      {!isMobile ? 
        <PdfWrapper isOpenPDF={isOpenPDF} >
          <h3 ref={ref}>Resume</h3>
          <FlexBox>
            <UtilityButton handleToggle={() => HandleToggleResumePDF(ref)}>
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
            <UtilityButton handleToggle={() => HandleToggleResumePDF(ref)}>
              Collapse
            </UtilityButton>
          )}     
        </PdfWrapper> :
        <FlexBox 
          alignItems={'center'}
          gap={({theme}) => theme.space[4]}
        >
          <h3>Resume</h3>
          <DownloadButton path={'/assets/content/Resume_Koran_Agan.pdf'}>
            Download
          </DownloadButton>
        </FlexBox>
      }
    </>
  );
}