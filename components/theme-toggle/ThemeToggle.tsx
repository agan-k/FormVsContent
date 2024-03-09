import { useContext, SetStateAction, Dispatch } from 'react';
import {ToggleThemeContext} from '../../pages/_app';
import {ThemeContext} from 'styled-components';
import {Button, DarkOn, LightOn} from './styled';

interface ThemeToggleProps {
  toggleNav?: Dispatch<SetStateAction<boolean>>
  isOpenNav?: boolean
}


export const ThemeToggle: React.FC<ThemeToggleProps> = ({toggleNav, isOpenNav}) => {
  const toggleTheme = useContext(ToggleThemeContext);
  function HandleOnClick() {
    toggleTheme();
    if (toggleNav === undefined) return;
    toggleNav(!isOpenNav); //turn off
  }
  
  return(
    <Button onClick={() => HandleOnClick()}>
      <DarkOn>&#x263d;</DarkOn>
      <LightOn>&#9788;</LightOn>
    </Button>
  );
};