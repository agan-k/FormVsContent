import styled from "styled-components";
import {theme as staticTheme} from '../../theme';
import { Z_INDEX } from "../../utils/constants";

export const Container = styled('div')(
  {
    position: 'fixed',
    width: '100%',
    height: staticTheme.space[5],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
    left: '0',
    top: '0',
    zIndex: Z_INDEX.header,
    background: ({theme}) => theme.colors.background,
  }
);
export const LogoWrapper = styled('div')(
  {
    zIndex: Z_INDEX.mobileLogo,
  }
)