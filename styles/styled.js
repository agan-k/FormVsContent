import styled from 'styled-components';
import {theme as staticTheme} from '../theme';
import {mediaQuery} from '../utils';

export const PostsWrapper = styled('div')({
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  margin: `${staticTheme.space[5]}px auto`,
  textAlign: 'left',
  ':hover': {
    boxShadow: ({theme}) => theme.shadows.card,
    transition: '.2s',
  },
  a: {
    width: '32%',
    color: staticTheme.colors.text,
  }
},
mediaQuery({
  display: ['block', 'flex'],
  padding: [staticTheme.space[2], '']
})
);
