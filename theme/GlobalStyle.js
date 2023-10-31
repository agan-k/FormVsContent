import { createGlobalStyle} from "styled-components"
import {theme} from "./theme"

export const GlobalStyles = createGlobalStyle({
//   '*': {
//   boxSizing: 'border-box'
// },
  body: {
    maxWidth: '1200px',
    margin: '0 auto',
    background: ({ theme }) => theme.colors.background,
    color: ({ theme }) => theme.colors.text,
    fontFamily: 'Tahoma, Helvetica, Arial, Roboto, sans-serif',
    transition: 'all 0.50s linear',
  },
  a: {
    textDecoration: 'none',
    color: '#6cbcf5'
  }
});
