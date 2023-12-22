import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';
import { mediaQuery } from '../../utils';

//breakpoints:
const bp1 = ({size}) => `${size[0]}px`;
const bp2 = ({size}) => `${size[1]}px`;
const bp3 = ({size}) => `${size[2]}px`;

export const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center'
})

export const Container = styled('div')(
  {
    h1: {
      width: '100%',
      fontWeight: staticTheme.fontWeights.body,
      fontSize: staticTheme.fontSizes[0],
      textAlign: 'center',
      color: ({theme}) => theme.colors.muted,
    },
    a: {
      color: ({theme}) => theme.colors.anchor,
    }
  },
  mediaQuery({
    width: [bp1, bp2, bp3],
    height: [bp1, bp2, bp3],
  })
);
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