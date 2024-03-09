import { useState, createContext, useContext } from "react"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../theme" ;

export const ToggleThemeContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ToggleThemeContext.Provider value={toggleTheme}>
        <Component {...pageProps} />
      </ToggleThemeContext.Provider>
    </ThemeProvider>
  ) 
}
export default MyApp
