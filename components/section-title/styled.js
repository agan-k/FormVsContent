import styled from "styled-components";
import {theme as staticTheme} from '../../theme';
import {mediaQuery} from "../../utils";

export const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center'
},
mediaQuery({
}));
export const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  letterSpacing: '.3rem',
});
export const Title = styled('h3')({
  margin: '0',
  paddingTop: staticTheme.space[2],
  verticalAlign: 'text',
  textAlign: 'center',
},
mediaQuery({
  fontSize: [`${staticTheme.fontSizes[6]}px`, `${staticTheme.fontSizes[7]}px`],
}));
export const CurlyBracket = styled('span')({
  fontWeight: '100',
  color: 'orange',
},
mediaQuery({
  fontSize: [`${staticTheme.space[6]}px`, `${staticTheme.space[6]}px`],
}));