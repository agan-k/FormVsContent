import styled from "styled-components";
import {mediaQuery} from "../../utils";

export const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  letterSpacing: '0',
});

export const CurlyBracket = styled('span')({
  fontFamily: 'Courier New',
  color: 'orange',
},
mediaQuery({
  fontSize: ({size}) => size,
}));