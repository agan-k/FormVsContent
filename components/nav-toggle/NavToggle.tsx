import { SetStateAction, Dispatch } from "react";
import { NavToggleButton } from "./styled";

interface NavToggleProps {
  toggleNav: Dispatch<SetStateAction<boolean>>
  isOpenNav: boolean
}

export const NavToggle: React.FC<NavToggleProps> = ({
  toggleNav, 
  isOpenNav,
}) => {
  return (
    <NavToggleButton onClick={toggleNav} isOpenNav={isOpenNav}>&#9776;</NavToggleButton>
  );
}