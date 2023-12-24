import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';
import { mediaQuery } from '../../utils';

export const Button = styled('button')(
  {
    width: staticTheme.space[4],
    height: staticTheme.space[4],
    background: ({theme}) => theme.colors.background,
    outline: 'none',
    border: 'none',
    paddingRight: staticTheme.space[4],
    fontSize: staticTheme.fontSizes[4],
    pointerEvents: 'auto',
    cursor: 'pointer',
    color: ({theme}) => theme.colors.text,
    ':hover': {
      color: ({theme}) => theme.colors.hover,
  },
},
mediaQuery({
    position: ['fixed', 'absolute'],
    top: ['10px', 'unset'],
    left: [staticTheme.space[2], 'unset'],
    right: ['unset', staticTheme.space[4]],
})
);