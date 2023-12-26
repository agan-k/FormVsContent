import styled from "styled-components";
import {theme as staticTheme} from '../../theme';

export const Wrapper = styled('div')(
  {
    display: 'flex',
    justifyContent: 'start',
    button: {
      height: staticTheme.space[4],
      margin: staticTheme.space[1],
      marginLeft: '0',
      fontSize: staticTheme.fontSizes[1],
      boxShadow: ({theme}) => theme.shadows.nav,
      border: ({theme}) => theme.borders.understated,
      borderRadius: '5px',
      background: ({theme}) => theme.colors.invertBg,
      color: ({theme}) => theme.colors.background,
      cursor: 'pointer',
    },
    'button:hover': {
      color: ({theme}) => theme.colors.lowKey,
      transition: '.4s'
    },
    a: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: staticTheme.space[2],
      paddingRight: staticTheme.space[2],
      paddingTop: '2px',

      margin: staticTheme.space[1],
      marginLeft: '0',
      fontSize: staticTheme.fontSizes[1],
      boxShadow: ({theme}) => theme.shadows.nav,
      border: ({theme}) => theme.borders.understated,
      borderRadius: '5px',
      background: ({theme}) => theme.colors.invertBg,
      color: ({theme}) => theme.colors.background,
      cursor: 'pointer',
    },
    'a:hover': {
      color: ({theme}) => theme.colors.lowKey,
      transition: '.5s'
    }
  }
);