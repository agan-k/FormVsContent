import styled from 'styled-components';
import { mediaQuery } from '../../utils';

export const Button = styled('button')(
  {
    width: ({theme}) => theme.space[4]+'px',
    height: ({theme}) => theme.space[4]+'px',
    outline: 'none',
    border: 'none',
    fontSize: ({theme}) => theme.fontSizes[4]+'px',
    pointerEvents: 'auto',
    cursor: 'pointer',
  },
  mediaQuery({
    position: ['block', 'absolute'],
    top: ['0', 'unset'],
    right: ['unset', ({theme}) => theme.space[4]+'px'],
    marginTop: [({theme}) => theme.space[3]+'px', 'unset'],
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
})
);

export const LightOn = styled.span`
  display: ${({theme}) => theme.name === 'light' ? 'block' : 'none'}
`;
export const DarkOn = styled.span`
  display: ${({theme}) => theme.name === 'dark' ? 'block' : 'none'}
`;