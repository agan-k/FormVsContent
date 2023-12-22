import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';

export const Button = styled('button')({
  width: staticTheme.space[4],
  height: staticTheme.space[4],
  outline: 'none',
  border: 'none',
  fontSize: staticTheme.fontSizes[4],
  color: ({theme}) => theme.colors.text,
  background: ({theme}) => theme.colors.background,
  ':hover': {
    color: ({theme}) => theme.colors.hover,
  },
});