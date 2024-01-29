import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';
import { mediaQuery } from '../../utils';

export const Button = styled('button')(
  {
    width: staticTheme.space[4],
    height: staticTheme.space[4],
    outline: 'none',
    border: 'none',
    fontSize: staticTheme.fontSizes[4],
    pointerEvents: 'auto',
    cursor: 'pointer',
  },
  mediaQuery({
    position: ['block', 'absolute'],
    top: [staticTheme.space[0], 'unset'],
    marginTop: [staticTheme.space[3], 'unset'],
    color: [
      ({theme}) => theme.colors.background,
      ({theme}) => theme.colors.text,
    ],
    background: [
      ({theme}) => theme.colors.invertBg,
      ({theme}) => theme.colors.background
    ],
    ':hover': {
      color: [
        'unset',
        ({theme}) => theme.colors.hover,
      ]
    },
  right: ['unset', staticTheme.space[4]],
})
);