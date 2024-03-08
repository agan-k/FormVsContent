import { useContext } from 'react';
import {ToggleThemeContext} from '../../pages/_app';
import {ThemeContext} from 'styled-components';
import {Button} from './styled';

export default function ThemeToggle({toggleNav}) {
  const theme = useContext(ThemeContext);
  const toggleTheme = useContext(ToggleThemeContext);
  const lightOn = <span>&#9788;</span>
  const darkOn = <span>&#x263d;</span>
  function HandleOnClick() {
    toggleTheme();
    if (toggleNav === undefined) return;
    // toggleNav();
  }
  
  return(
    <Button onClick={() => HandleOnClick()}>
      {theme.name === 'light' ? darkOn : lightOn}
    </Button>
  );
}