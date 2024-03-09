import styled from "styled-components";

export const NavToggleButton = styled('button')(
  {
    width: ({theme}) => theme.space[3] + theme.fontSizes[4]+'px',
    border: 'none',
    background: 'none',
    fontSize: ({theme}) => theme.fontSizes[4] + theme.fontSizes[2]+'px',
    color: ({theme, isOpenNav}) => isOpenNav ? theme.colors.background : theme.colors.invertBg,
  }
);