import {UtilityButton, DownloadButton, FlexBox} from '../../components';
import {theme as staticTheme} from '../../theme';
import { PdfWrapper } from './styled';


export default function PdfEmbed({isOpenPDF, isMobile, ref, onClick}) {
  return(
    <>
      {!isMobile ? 
        <PdfWrapper isOpenPDF={isOpenPDF} >
          <h3 ref={ref}>Resume</h3>
          <FlexBox>
            <UtilityButton onClick={() => onClick()}>
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
            <UtilityButton onClick={() => onClick()}>
              Collapse
            </UtilityButton>
          )}     
        </PdfWrapper> :
        <FlexBox 
          alignItems={'center'}
          gap={staticTheme.space[4]}
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