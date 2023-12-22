import styled from "styled-components";
import {theme as staticTheme} from '../../theme';

export const Container = styled('div')({
  paddingTop: staticTheme.space[5],
  position: 'relative',
  margin: '0 auto',
});
export const Main = styled('div')({
  width: '100%',
});