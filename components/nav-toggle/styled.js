import styled from "styled-components";
import {theme as staticTheme} from '../../theme';

export const NavToggleButton = styled('button')(
  {
    border: 'none',
    background: 'none',
    fontSize: staticTheme.fontSizes[5],
    color: ({theme}) => ({isOpenNav}) => isOpenNav ? theme.colors.background : theme.colors.invertBg,
    textAlign: ({isOpenNav}) => console.log(isOpenNav),
  }
);