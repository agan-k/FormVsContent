import styled from "styled-components";
import {theme as staticTheme} from '../../theme';
import {mediaQuery} from "../../utils";

export const Container = styled('div')({
  margin: '0 auto',
  //TODO - find better solution for inline code block
  em: {//this is used for inline code block for now
    fontStyle: 'normal',
    fontFamily: 'monospace',
    fontSize: '.8rem',
    fontWeight: '100',
    borderRadius: '4px',
    boxShadow: ({theme}) => theme.shadows.inlineCode,
    padding: '.1rem .2rem',
    color: ({theme}) => theme.colors.text,
  }
},
mediaQuery({
  width: ['100%', '60%'],
  paddingTop: [staticTheme.space[3], staticTheme.space[5]]
}));
export const Header = styled('div')({
  display: 'flex',
},
mediaQuery({
  display: ['flex'],
  img: {
  height: [staticTheme.space[4], staticTheme.space[5]],
  marginLeft: [staticTheme.space[2], '0'],
  borderRadius: '15%',
  transform: 'rotate(-8deg)',
  boxShadow: '3px 2px 5px 0px grey',
  border: '2px solid rgb(240, 226, 202)',
  },
}));
export const Title = styled('div')({
  h2: {
    marginBottom: '0',
    fontWeight: staticTheme.fontWeights.heading,
  },
  h3: {
    margin: '0',
    fontSize: staticTheme.fontSizes[3],
    fontWeight: staticTheme.fontWeights.body,
  },
},
mediaQuery({
  marginBottom: [staticTheme.space[3], staticTheme.space[4]],
  marginLeft: ['0', staticTheme.space[2]],
  h2: {
    marginTop: [staticTheme.space[4]],
    fontSize: [staticTheme.fontSizes[4], staticTheme.fontSizes[5]],
  },
  h3: {
    fontSize: [staticTheme.fontSizes[1], staticTheme.fontSizes[3]],
  }
}));
export const Body = styled('div')({
  padding: staticTheme.space[2],
  fontWeight: '400',
  fontSize: '.9rem',
  pre: {
    width: '90%',
    margin: '0 auto!important',
    borderRadius: '5px'
  },
  img: {
    width: '92%',
    display: 'block',
    margin: '0 auto',
    border: ({theme}) => theme.borders.understated
  }
},
mediaQuery({
  blockquote: {
    width: '95%',
    margin: '0 auto'
  },
  'blockquote p': {
    // width: ['95%', '80%'],
    color: '#afafaf',
    fontStyle: 'italic',
    fontSize: [staticTheme.fontSizes[4], staticTheme.fontSizes[5]],
    lineHeight: '1.2em',
    margin: '0',
    paddingLeft: '.5em',
    borderLeft: '2px #eee solid',
  },
}));
export const Signature = styled('span')({
  display: 'block',
  padding: staticTheme.space[2],
  fontStyle: 'italic',
  fontWeight: staticTheme.fontWeights.thin,
  textAlign: 'right',
  fontSize: staticTheme.fontSizes[0],
  color: ({theme}) => theme.colors.text,
})