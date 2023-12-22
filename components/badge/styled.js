import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';
import {mediaQuery} from '../../utils';

export const Container = styled('div')({
  position: 'relative',
  textAlign: 'center',
  height: '6rem',
  width: '100%',
  marginTop: '0rem',
  backgroundSize: '100%',
  backgroundPosition: 'top right',
  a: {
    color: ({theme}) => theme.colors.anchor,
  }
},
mediaQuery({
  display: ['initial', 'none'],
  paddingBottom: [staticTheme.space[7]],
  marginBottom: [staticTheme.space[6]]
}));

export const LinksContainer = styled('div')({
  marginLeft: staticTheme.space[3],
  marginTop: staticTheme.space[3],
})
