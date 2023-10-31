import '../styles/global.css'
import { useState } from "react"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../theme" 

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <button onClick={toggleTheme}>Switch Theme</button>
        <Component {...pageProps} theme={theme}/>
      </ThemeProvider>
  ) 
}
export default MyApp
