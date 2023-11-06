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
  h1: {
    fontFamily: 'courier',
    fontWeight: staticTheme.fontWeights.body,
    fontSize: staticTheme.fontSizes[0],
    marginLeft: staticTheme.space[3],
    color: ({theme}) => theme.colors.muted,
  },
  a: {
    color: ({theme}) => theme.colors.anchor,
  }
})
export const Avatar = styled('div')({
  display: 'block',
  margin: '2rem auto 0',
  width: '9rem',
  height: '9rem',
  borderRadius: '15%',
  transform: 'rotate(-6deg)',
  boxShadow: '3px 2px 5px 0px grey',
  border: '2px solid rgb(240, 226, 202)',
  backgroundImage: "url('/assets/sailin.jpg')",
  backgroundSize: '100%',
})
export const LinksContainer = styled('div')({
  marginLeft: staticTheme.space[3],
})
