import styled from 'styled-components';
import {theme as staticTheme} from '../theme'

export const PostsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  width: '90%',
  margin: `${staticTheme.space[5]}px auto`,
  textAlign: 'left',
  ':hover': {
    boxShadow: ({theme}) => theme.shadows.card,
  },
  a: {
    width: '32%',
    color: staticTheme.colors.text,
  }
});
