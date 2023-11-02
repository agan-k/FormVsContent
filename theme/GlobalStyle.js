import { createGlobalStyle} from "styled-components"
import {theme} from "./theme"

export const GlobalStyles = createGlobalStyle({

  '*': {
    transition: 'all 0.50s linear',
  },
  body: {
    maxWidth: '1200px',
    margin: '0 auto',
    background: ({ theme }) => theme.colors.background,
    color: ({ theme }) => theme.colors.text,
    fontFamily: 'Tahoma, Helvetica, Arial, Roboto, sans-serif',
  },
  a: {
    textDecoration: 'none',
    color: '#6cbcf5'
  }
});
