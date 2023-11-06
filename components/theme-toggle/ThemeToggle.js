import {Button} from './styled';

export default function ThemeToggle({onClick, children}) {
  return(
    <Button onClick={() => onClick()}>{children}</Button>
  );
}