import styled from "styled-components";
import {theme as staticTheme} from '../../theme';
import {mediaQuery} from "../../utils";

const navHeight = ({isOpenNav}) => isOpenNav ? '380px' : '45px';
const background = ({isOpenNav}) => isOpenNav ? 
  ({theme}) => theme.colors.invertBg :
  ({theme}) => theme.colors.background;

export const Container = styled('div')(
  {
    position: 'fixed',
    display: 'flex',
    overflow: 'hidden',
    top: '0',
    right: '0',
    zIndex: '999',
  },
  mediaQuery({
    width: ['50%', '100%'],
    height: [navHeight, 'initial'],
    flexDirection: ['column', 'row'],
    alignItems: ['end', 'center'],
    justifyContent: ['unset', 'space-evenly'],
    background: [background, ({theme}) => theme.colors.background],
    paddingTop: [staticTheme.space[1], staticTheme.space[3]],
    marginBottom: [staticTheme.space[4], staticTheme.space[5]],
    paddingBottom: ['unset', staticTheme.space[3]],
  })
);
export const NavList = styled('ul')(
  {
    display: 'flex',
    paddingLeft: staticTheme.space[2],
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
    fontSize: staticTheme.fontSizes[2],
    minWidth: staticTheme.space[5],
    'a:any-link': {
      textDecoration: 'none',
      letterSpacing: '2px',
      fontWeight: ({active}) => active ? staticTheme.fontWeights.bold : staticTheme.fontWeights.body,
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
      fontWeight: staticTheme.fontWeights.bold,
      color: ({theme}) => theme.colors.hover,
    }
  })
);