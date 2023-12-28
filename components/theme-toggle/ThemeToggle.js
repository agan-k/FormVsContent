import {Button} from './styled';

export default function ThemeToggle({onClick, theme}) {
  const lightOn = <span>&#9788;</span>
  const darkOn = <span>&#x263d;</span>
  return(
    <Button onClick={() => onClick()}>
      {theme == 'light' ? darkOn : lightOn}
    </Button>
  );
}