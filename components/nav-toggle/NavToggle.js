import { NavToggleButton } from "./styled";

export default function NavToggle({onClick, isOpenNav}) {
  return (
    <NavToggleButton onClick={onClick} isOpenNav={isOpenNav}>&#9776;</NavToggleButton>
  );
}