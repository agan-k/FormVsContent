import styled from 'styled-components';
import {mediaQuery} from '../utils';

export const PageWrapper = styled('div')(
  {
    margin: '0 auto',
    paddingTop: ({theme}) => theme.space[5]+'px',
  },
  mediaQuery({
    width: ['95%', '90%']
  })
);

export const PostsWrapper = styled('div')({
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  width: ({theme}) => theme.space[9]+'px',
  margin: ({theme}) => `${theme.space[5]}px auto`,
  ':hover': {
    boxShadow: ({theme}) => theme.shadows.card,
    transition: '0.2s',
  },
  a: {
    width: '49%',
    color: ({theme}) => theme.colors.text,
  }
},
mediaQuery({
  display: ['block', 'flex'],
  padding: [({theme}) => theme.space[2]+'px']
})
);