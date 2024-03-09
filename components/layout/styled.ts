import styled from "styled-components";
import { mediaQuery } from "../../utils";

export const Container = styled('div')(
  {
    position: 'relative',
    margin: '0 auto',
  },
  mediaQuery({
    paddingTop: [
      ({theme}) => theme.space[5]+'px', 
      ({theme}) => theme.space[5] + theme.space[1]+'px',
    ],
  })
);
export const Main = styled('div')({
  width: '100%',
});