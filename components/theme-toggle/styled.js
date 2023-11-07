import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';

export const Button = styled('button')({
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',
  width: staticTheme.space[4],
  height: staticTheme.space[4],
  outline: 'none',
  border: 'none',
  fontSize: staticTheme.fontSizes[4],
  color: ({theme}) => theme.colors.text,
  background: ({theme}) => theme.colors.background,
  ':hover': {
    boxShadow: ({theme}) => theme.shadows.nav,
    color: ({theme}) => theme.colors.hover,
  },
});