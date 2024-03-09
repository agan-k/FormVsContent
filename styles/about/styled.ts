import styled from 'styled-components';
import {mediaQuery} from '../../utils';

export const AboutContainer = styled('div')(
  {
    margin: '0 auto',
    lineHeight: ({theme}) => theme.lineHeights.body,

    li: {
      display: 'flex',
      p: {
        marginTop: 0,
      },
      '&:before': {
        content: '"*"',
        paddingRight: ({theme}) => theme.space[3]+'px',
        fontFamily: 'initial',
        fontWeight: 700,
        fontSize: ({theme}) => theme.fontSizes[3]+'px'
      }
    },
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
      height: ({isOpenPDF}) => isOpenPDF ? '100Vh' : ({theme}) => theme.space[3],
    },
  },
  mediaQuery({
  })
);
