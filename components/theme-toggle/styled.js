import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';
import { mediaQuery } from '../../utils';

export const Button = styled('button')(
  {
    width: staticTheme.space[4],
    height: staticTheme.space[4],
    outline: 'none',
    border: 'none',
    paddingRight: staticTheme.space[4],
    fontSize: staticTheme.fontSizes[4],
    color: ({theme}) => theme.colors.text,
    background: ({theme}) => theme.colors.background,
    pointerEvents: 'auto',
    cursor: 'pointer',
    ':hover': {
      color: ({theme}) => theme.colors.hover,
  },
},
mediaQuery({
  position: ['initital', 'absolute'],
  right: staticTheme.space[4],
})
);