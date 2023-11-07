import styled from "styled-components";
import {theme as staticTheme} from '../../theme';
import {mediaQuery} from "../../utils";

export const Container = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0',
  borderRadius: '0',
  zIndex: '99',
},
mediaQuery({
  paddingTop: [staticTheme.space[1], staticTheme.space[3]],
  marginBottom: [staticTheme.space[4], staticTheme.space[6]],

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
    boxShadow: ({active}) => active === 'true' ? ({theme}) => theme.shadows.nav : 'none',
  },
  'a:hover': {
    boxShadow: ({theme}) => theme.shadows.nav,
    color: ({theme}) => theme.colors.hover,
  }
},
mediaQuery({
  a: {
    // paddingLeft: [staticTheme.space[2], '0']
  }

}))