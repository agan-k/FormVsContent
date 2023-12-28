import styled from "styled-components";
import {theme as staticTheme} from '../../theme';

export const NavToggleButton = styled('button')(
  {
    width: staticTheme.space[3] + staticTheme.fontSizes[4],
    border: 'none',
    background: 'none',
    fontSize: staticTheme.fontSizes[4] + staticTheme.fontSizes[2],
    color: ({theme}) => ({isOpenNav}) => isOpenNav ? theme.colors.background : theme.colors.invertBg,
  }
);