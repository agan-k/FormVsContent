import styled from 'styled-components';
import {theme as staticTheme} from '../theme'

export const PostsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  width: '100%',
  marginTop: staticTheme.space[5],
  textAlign: 'left',
});
