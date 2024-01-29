import styled from 'styled-components';
import {theme as staticTheme} from '../theme';
import {mediaQuery} from '../utils';

export const PageWrapper = styled('div')(
  {
    margin: '0 auto',
    paddingTop: staticTheme.space[5],
  },
  mediaQuery({
    width: ['95%', '90%']
  })
);

export const PostsWrapper = styled('div')({
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  width: staticTheme.space[9],
  margin: `${staticTheme.space[5]}px auto`,
  ':hover': {
    boxShadow: ({theme}) => theme.shadows.card,
    transition: '0.2s',
  },
  a: {
    width: '49%',
    color: staticTheme.colors.text,
  }
},
mediaQuery({
  display: ['block', 'flex'],
  padding: [staticTheme.space[2]]
})
);