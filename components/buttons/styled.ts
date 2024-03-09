import styled from "styled-components";

export const Wrapper = styled('div')(
  {
    display: 'flex',
    justifyContent: 'start',
    button: {
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
      border: ({theme}) => theme.borders.understated,
      borderRadius: '5px',
      background: ({theme}) => theme.colors.invertBg,
      color: ({theme}) => theme.colors.background,
      cursor: 'pointer',
    },
    'button:hover': {
      color: ({theme}) => theme.colors.lowKey,
      transition: '0.4s'
    },
    a: {
      display: 'flex',
      alignItems: 'center',
      height: ({theme}) => theme.space[4]+'px',
      paddingLeft: ({theme}) => theme.space[2]+'px',
      paddingRight: ({theme}) => theme.space[2]+'px',

      margin: ({theme}) => theme.space[1]+'px',
      marginLeft: '0',
      fontSize: ({theme}) => theme.fontSizes[1]+'px',
      boxShadow: ({theme}) => theme.shadows.nav,
      border: ({theme}) => theme.borders.understated,
      borderRadius: '5px',
      background: ({theme}) => theme.colors.invertBg,
      color: ({theme}) => theme.colors.background,
      cursor: 'pointer',
    },
    'a:hover': {
      color: ({theme}) => theme.colors.lowKey,
      transition: '0.4s'
    }
  }
);