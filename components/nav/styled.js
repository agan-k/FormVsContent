import styled from "styled-components";
import {theme as staticTheme} from '../../theme';
import {mediaQuery} from "../../utils";

export const Container = styled('div')({
  display: 'flex',
  position: 'fixed',
  top: '0',
  left: '0',
  background: ({theme}) => theme.colors.background,
  alignItems: 'center',
  width: '100%',
  borderRadius: '0',
  zIndex: '99',
},
mediaQuery({
  
  justifyContent: ['space-between', 'space-evenly'],
  paddingTop: [staticTheme.space[1], staticTheme.space[3]],
  marginBottom: [staticTheme.space[4], staticTheme.space[5]],
  paddingLeft: [staticTheme.space[1], 'unset'],

}));
export const NavList = styled('ul')({
  display: 'flex',
  
  alignItems: 'center',
  margin: '0',
  padding: '0',
},
mediaQuery({
  minWidth: ['50%', '25%'],
  justifyContent: ['space-between'],

}));
export const NavItem = styled('li')({
  listStyle: 'none',
  padding: '0',
  margin: '0',
  fontSize: staticTheme.fontSizes[2],
  a: {
    padding: staticTheme.space[2],
    paddingTop: '0',
    textDecoration: 'none',
    color: 'grey',
    borderRadius: '0',
    color: ({active}) => active === 'true' ? ({theme}) => theme.colors.text : ({theme}) => theme.colors.lowKey,
    pointerEvents: ({active}) => active === 'true' ? 'none' : 'initial',
  },
  'a:hover': {
    color: ({theme}) => theme.colors.hover,
    transition: '.5s'
  }
},
mediaQuery({
  display: ['']

}))