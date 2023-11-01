import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';

export const Button = styled('button')({
  width: staticTheme.space[5],
  outline: 'none',
  border: 'none',
  fontSize: staticTheme.fontSizes[4],
  padding: '.5rem 0',
  margin: '.5rem',
  color: ({theme}) => theme.colors.text,
  background: ({theme}) => theme.colors.background,
  ':hover': {
    boxShadow: ({theme}) => theme.shadows.nav,
    color: ({theme}) => theme.colors.hover,
  }
});