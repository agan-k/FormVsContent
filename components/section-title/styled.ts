import styled from "styled-components";
import {mediaQuery} from "../../utils";

export const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  letterSpacing: '.3rem',
});
export const Title = styled('h3')({
  margin: '0',
  paddingBottom: '6px',
  textAlign: 'center',
},
mediaQuery({
  fontSize: [
    ({theme}) => `${theme.fontSizes[6]}px`, 
    ({theme}) => `${theme.fontSizes[7]}px`
  ],
}));