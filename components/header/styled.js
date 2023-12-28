import styled from "styled-components";
import {theme as staticTheme} from '../../theme';

export const Container = styled('div')(
  {
    position: 'fixed',
    width: '100%',
    height: staticTheme.space[5],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    left: '0',
    top: '0',
    zIndex: '999',
    background: ({theme}) => theme.colors.background,
  }
)