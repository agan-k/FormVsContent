import {Button} from './styled';

export default function ThemeToggle({toggleTheme, theme, toggleNav}) {
  const lightOn = <span>&#9788;</span>
  const darkOn = <span>&#x263d;</span>

  function HandleOnClick() {
    toggleTheme();
    if (toggleNav === undefined) return;
    toggleNav();
  }
  
  return(
    <Button onClick={() => HandleOnClick()}>
      {theme == 'light' ? darkOn : lightOn}
    </Button>
  );
}