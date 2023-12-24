import styled from "styled-components";
import {theme as staticTheme} from '../../theme';
import {mediaQuery} from "../../utils";

const navHeight = ({isOpenNav}) => isOpenNav ? '330px' : '45px';
const navWidth = ({isOpenNav}) => isOpenNav ? '50%' : '100%';
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
    width: [navWidth, '100%'],
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
    padding: 0,
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
    'a:any-link': {
      padding: staticTheme.space[2],
      textDecoration: 'none',
      borderRadius: '0',
      color: ({active}) => active ? ({theme}) => theme.colors.text : ({theme}) => theme.colors.lowKey,
      pointerEvents: ({active}) => active === 'true' ? 'none' : 'initial',
    },
    'a:hover': {
      color: ({theme}) => theme.colors.hover,
      transition: '.5s'
    }
  },
  mediaQuery({
    padding: ['10px', 'initial']
  })
);