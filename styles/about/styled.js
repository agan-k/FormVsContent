import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';
import {mediaQuery} from '../../utils';

export const AboutContainer = styled('div')(
  {
    margin: '0 auto',
    fontSize: staticTheme.fontSizes[3],
    lineHeight: staticTheme.lineHeights.body,
    img: {
      height: '150px'
    }
  },
  mediaQuery({
    width: ['100%', '80%'],
    ul: {
      paddingLeft: '25px',
    }
  })
);

export const PdfWrapper = styled('div')(
  {
    object: {
      height: ({isOpenPDF}) => isOpenPDF ? '100Vh' : staticTheme.space[3],
    },
  },
  mediaQuery({
  })
);
