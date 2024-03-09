import styled from "styled-components";
import {mediaQuery} from "../../utils";

const navHeight = ({theme, isOpenNav}) => isOpenNav ?
 '100%' : theme.space[5]+'px';
const background = ({isOpenNav}) => isOpenNav ? 
  ({theme}) => theme.colors.invertBg :
  ({theme}) => theme.colors.background;

export const Container = styled('div')(
  {
    position: 'fixed',
    display: 'flex',
    top: '0',
    right: '0',
  },
  mediaQuery({
    width: ['50%', '100%'],
    height: [
      navHeight, 
      ({theme}) => theme.space[5]-8+'px',
    ],
    overflow: ['hidden', 'unset'],
    flexDirection: ['column', 'row'],
    alignItems: ['end', 'center'],
    justifyContent: ['unset', 'space-evenly'],
    background: [background, ({theme}) => theme.colors.background],
    paddingTop: [0, ({theme}) => theme.space[3]+'px'],
    marginBottom: [({theme}) => theme.space[4], ({theme}) => theme.space[5]],
    paddingBottom: ['unset', ({theme}) => theme.space[3]],
  })
);
export const NavList = styled('ul')(
  {
    display: 'flex',
    paddingLeft: ({theme}) => theme.space[2],
  },
  mediaQuery({
    minWidth: ['98%', '25%'],
    flexDirection: ['column', 'row'],
    justifyContent: ['unset', 'space-between'],
    alignItems: ['end', 'center'],
  })
);
export const NavItem = styled('li')(
  {
    listStyle: 'none',
    fontSize: ({theme}) => theme.fontSizes[2]+'px',
    minWidth: ({theme}) => theme.space[5]+'px',
    'a:any-link': {
      textDecoration: 'none',
      letterSpacing: '2px',
      fontWeight: ({active, theme}) => active ? theme.fontWeights.bold : theme.fontWeights.body,
      pointerEvents: ({active}) => active ? 'none' : 'initial',
    },
  },
  mediaQuery({
    padding: ['10px', 'initial'],
    textAlign: ['right', 'center'],
    'a:any-link': {
      color: 
      [
        ({theme}) => ({active}) =>
        active ? theme.colors.invertHover : theme.colors.lowKey,
        
        ({theme}) => ({active}) =>
        active ? theme.colors.hover : theme.colors.lowKey,
      ]
    },
    'a:hover': {
      fontWeight: ({theme}) => theme.fontWeights.bold,
      color: ({theme}) => theme.colors.hover,
    }
  })
);