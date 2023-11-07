import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';

export const Container = styled('div')({
  position: 'relative',
  textAlign: 'center',
  height: '10rem',
  width: '100%',
  marginTop: '0rem',
  marginBottom: staticTheme.space[6],
  paddingTop: '1rem',
  paddingBottom: '1rem',
  backgroundSize: '100%',
  backgroundPosition: 'top right',
  a: {
    color: ({theme}) => theme.colors.anchor,
  }
});

export const LinksContainer = styled('div')({
  marginLeft: staticTheme.space[3],
  marginTop: staticTheme.space[3],
})
