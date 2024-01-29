import styled from "styled-components";
import {theme as staticTheme} from '../../theme';
import { mediaQuery } from "../../utils";

export const Container = styled('div')(
  {
    position: 'relative',
    margin: '0 auto',
  },
  mediaQuery({
    paddingTop: [
      staticTheme.space[5], 
      staticTheme.space[5] + staticTheme.space[1]
    ],
  })
);
export const Main = styled('div')({
  width: '100%',
});