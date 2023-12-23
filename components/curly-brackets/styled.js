import styled from "styled-components";
import {theme as staticTheme} from '../../theme';
import {mediaQuery} from "../../utils";

({size}) => console.log('here: ', size);

export const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  letterSpacing: '.3rem',
});

export const CurlyBracket = styled('span')({
  fontWeight: '100',
  color: 'orange',
},
mediaQuery({
  fontSize: ({size}) => `${size}px`,
}));