import styled from "styled-components";
import {theme as staticTheme} from '../../theme';

export const Wrapper = styled('div')(
  {
    display: 'flex',
    justifyContent: 'start',
    button: {
      display: 'flex',
      alignItems: 'center',
      height: staticTheme.space[4],
      margin: staticTheme.space[1],
      padding: staticTheme.space[3],
      paddingLeft: staticTheme.space[2],
      paddingRight: staticTheme.space[2],
      marginLeft: '0',
      fontFamily: staticTheme.fonts.body,
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
      transition: '0.4s'
    },
    a: {
      display: 'flex',
      alignItems: 'center',
      height: staticTheme.space[4],
      paddingLeft: staticTheme.space[2],
      paddingRight: staticTheme.space[2],

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
      transition: '0.4s'
    }
  }
);