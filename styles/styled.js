import styled from 'styled-components';
import {theme as staticTheme} from '../theme';
import {mediaQuery} from '../utils';

export const DownloadLink = styled('div')(
  {
    display: 'flex',
    justifyContent: 'flex-end',
    a: {
      padding: staticTheme.space[1],
      boxShadow: ({theme}) => theme.shadows.nav,
      border: ({theme}) => theme.borders.understated,
      borderRadius: '5px',
      color: ({theme}) => theme.colors.muted
    },
    'a:hover': {
      color: ({theme}) => theme.colors.anchor,
      transition: '.5s'
    }
    
  }
)

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
