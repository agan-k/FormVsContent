import styled from "styled-components";
import {theme as staticTheme} from '../../theme';
import {mediaQuery} from "../../utils";

export const Container = styled('div')(
  {
    margin: '0 auto',
    paddingTop: ({theme}) => theme.space[5]+'px',
    //** TODO - find better solution for inline code block
    em: {//** this is used for inline code block for now
      fontStyle: 'normal',
      // fontFamily: 'monospace',
      fontSize: ({theme}) => theme.fontSizes[1]+'px',
      fontWeight: '100',
      borderRadius: '4px',
      boxShadow: ({theme}) => theme.shadows.inlineCode,
      padding: '.1rem .2rem',
      color: ({theme}) => theme.colors.text,
    }
  },
  mediaQuery({
    width: ['100%', '65%'],
  })
);
export const Header = styled('div')(
  mediaQuery({
    display: ['flex'],
    img: {
    height: [
      ({theme}) => theme.space[4]+'px',
      ({theme}) => theme.space[5]+'px',
    ],
    marginLeft: [
      ({theme}) => theme.space[2]+'px',
      '0',
    ],
    borderRadius: '15%',
    transform: 'rotate(-8deg)',
    boxShadow: '3px 2px 5px 0px grey',
    border: '2px solid rgb(240, 226, 202)',
    },
  })
);
export const Title = styled('div')({
  h2: {
    marginBottom: '0',
    fontWeight: ({theme}) => theme.fontWeights.heading,
  },
  h3: {
    margin: '0',
    fontWeight: ({theme}) => theme.fontWeights.body,
  },
},
mediaQuery({
  marginBottom: [
    ({theme}) => theme.space[3]+'px',
    ({theme}) => theme.space[4]+'px',
  ],
  marginLeft: [
    '0', 
    ({theme}) => theme.space[2]+'px',
  ],
  h2: {
    marginTop: [({theme}) => theme.space[4]+'px'],
    fontSize: [
      ({theme}) => theme.fontSizes[4]+'px',
      ({theme}) => theme.fontSizes[5]+'px',
    ],
  },
  h3: {
    fontSize: [
      ({theme}) => theme.fontSizes[1]+'px', 
      ({theme}) => theme.fontSizes[3]+'px',
    ],
  }
}));
export const Body = styled('div')(
  {
    padding: ({theme}) => theme.space[2]+'px',
    lineHeight: ({theme}) => theme.lineHeights.body,
    pre: {// ** code block **
      width: '90%',
      borderRadius: '5px',
    },
    img: {
      width: '68%',
      display: 'block',
      margin: '0 auto',
      border: ({theme}) => theme.borders.understated
    },
  },
  mediaQuery({
    blockquote: {
      width: '95%',
      margin: '0 auto',
      color: ({theme}) => theme.colors.lowKey,
    },
    'blockquote p': {
      // width: ['95%', '80%'],
      fontStyle: 'italic',
      fontSize: [
        ({theme}) => theme.fontSizes[4]+'px',
        ({theme}) => theme.fontSizes[5]+'px',
      ],
      lineHeight: '1.2em',
      margin: '0',
      paddingLeft: '.5em',
      borderLeft: '2px #eee solid',
    },

  })
);
export const Signature = styled('span')({
  display: 'block',
  padding: ({theme}) => theme.space[2]+'px',
  fontStyle: 'italic',
  fontWeight: ({theme}) => theme.fontWeights.thin,
  textAlign: 'right',
  fontSize: ({theme}) => theme.fontSizes[0]+'px',
  color: ({theme}) => theme.colors.text,
})