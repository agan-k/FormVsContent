import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle({
  body: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    background: ({ theme }) => theme.colors.background,
    color: ({ theme }) => theme.colors.text,
    fontFamily: ({ theme }) => theme.fonts.body,
  },
  'a:any-link': {
    textDecoration: 'none',
    color: ({theme}) => theme.colors.anchor,
  },
});
