import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';

export const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center'
})

export const Container = styled('div')({
  // position: 'relative',
  height: ({size}) => `${size}px`,
  width: ({size}) => `${size}px`,
  h1: {
    width: '100%',
    fontFamily: 'courier',
    fontWeight: staticTheme.fontWeights.body,
    fontSize: staticTheme.fontSizes[0],
    textAlign: 'center',
    color: ({theme}) => theme.colors.muted,
  },
  a: {
    color: ({theme}) => theme.colors.anchor,
  }
})
export const Avatar = styled('div')({
  width: '100%',
  height: '100%',
  borderRadius: '15%',
  transform: 'rotate(-6deg)',
  boxShadow: '3px 2px 5px 0px grey',
  border: '2px solid rgb(240, 226, 202)',
  backgroundImage: "url('/assets/sailin.jpg')",
  backgroundSize: '100%',
})