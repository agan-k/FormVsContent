import styled from "styled-components";
import { mediaQuery } from "../../utils";

export const Wrapper = styled('div')(
  {
    display: 'flex',
    justifyContent: 'start',
    button: {// Utility button:
      display: 'flex',
      alignItems: 'center',
      height: ({theme}) => theme.space[4]+'px',
      margin: ({theme}) => theme.space[1]+'px',
      padding: ({theme}) => theme.space[3]+'px',
      paddingLeft: ({theme}) => theme.space[2]+'px',
      paddingRight: ({theme}) => theme.space[2]+'px',
      marginLeft: '0',
      fontFamily: ({theme}) => theme.fonts.body,
      fontSize: ({theme}) => theme.fontSizes[1]+'px',
      boxShadow: ({theme}) => theme.shadows.nav,
      border: ({theme}) => theme.borders.button,
      background: ({theme}) => theme.colors.background,
      color: ({theme}) => theme.colors.text,
      cursor: 'pointer',
    },
    'button:hover': {
      color: ({theme}) => theme.colors.anchor,
      transition: '0.4s',
    },
    a: {// Download button:
      display: 'flex',
      alignItems: 'center',
      height: ({theme}) => theme.space[4]+'px',
      paddingLeft: ({theme}) => theme.space[2]+'px',
      paddingRight: ({theme}) => theme.space[2]+'px',

      margin: ({theme}) => theme.space[1]+'px',
      marginLeft: '0',
      fontSize: ({theme}) => theme.fontSizes[1]+'px',
      boxShadow: ({theme}) => theme.shadows.nav,
      border: ({theme}) => theme.borders.button,
      background: ({theme}) => theme.colors.background,
      color: ({theme}) => theme.colors.text,
      cursor: 'pointer',
    },
    'a:hover': {
      color: ({theme}) => theme.colors.anchor,
      transition: '0.4s'
    }
  }
);