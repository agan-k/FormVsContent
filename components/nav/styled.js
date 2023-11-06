import styled from "styled-components";
import {theme as staticTheme} from '../../theme';

export const Container = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0',
  borderRadius: '0',
  zIndex: '99',
})
export const NavList = styled('ul')({
  minWidth: 'min-content',
  display: 'flex',
  justifyContent: 'space-evenly',
  margin: '0',
  zIndex: '0',
  padding: '0',
})
export const NavItem = styled('li')({
  // textTransform: 'uppercase',
  listStyle: 'none',
  paddingTop: staticTheme.space[1],
  margin: staticTheme.space[3],
  a: {
    padding: '.5rem',
    textDecoration: 'none',
    color: 'grey',
    borderRadius: '0',
    boxShadow: ({active}) => active === 'true' ? ({theme}) => theme.shadows.nav : 'none',
  },
  'a:hover': {
    boxShadow: ({theme}) => theme.shadows.nav,
    color: ({theme}) => theme.colors.hover,
  }
})