import styled from "styled-components";
import {theme as staticTheme} from '../../theme';

export const Container = styled('div')({
  width: '70%',
  margin: '0 auto',
  paddingTop: staticTheme.space[5],
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
});
export const Header = styled('div')({
  display: 'flex',
  img: {
  height: staticTheme.space[5],
  borderRadius: '15%',
  transform: 'rotate(-8deg)',
  boxShadow: '3px 2px 5px 0px grey',
  border: '2px solid rgb(240, 226, 202)',
  },
});
export const Title = styled('div')({
  marginLeft: staticTheme.space[3],
  h2: {
    marginBottom: '0',
    fontSize: staticTheme.fontSizes[5],
    fontWeight: staticTheme.fontWeights.heading,
  },
  h3: {
    margin: '0',
    fontSize: staticTheme.fontSizes[3],
    fontWeight: staticTheme.fontWeights.body,
  },
});
export const Body = styled('div')({
  padding: '2rem',
  fontWeight: '400',
  fontSize: '.9rem',
  'blockquote p': {
    width: '80%',
    color: '#afafaf',
    fontStyle: 'italic',
    fontSize: '2.5em',
    lineHeight: '1.2em',
    margin: '0 auto',
    paddingLeft: '.5em',
    borderLeft: '2px #eee solid',
  },
  pre: {
    width: '90%',
    margin: '0 auto!important',
    borderRadius: '5px'
  }
});
export const Signature = styled('span')({
  display: 'block',
  padding: staticTheme.space[2],
  fontStyle: 'italic',
  fontWeight: staticTheme.fontWeights.thin,
  textAlign: 'right',
  fontSize: staticTheme.fontSizes[0],
  color: ({theme}) => theme.colors.text,
})