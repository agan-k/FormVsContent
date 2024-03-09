import styled from "styled-components";
import { Z_INDEX } from "../../utils/constants";

export const Container = styled('div')(
  {
    position: 'fixed',
    width: '100%',
    height: ({theme}) => theme.space[5]+'px',
    display: 'flex',
    justifyContent: 'center',
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