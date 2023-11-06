import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, NavItem, NavList } from './styled';
import {ThemeToggle} from '../../components';


export default function Nav({theme, toggleTheme}) {
  const router = useRouter();  
  const navLinks = [
    {name: 'home', link: '/'},
    {name: 'blog', link: '/blog'},
    {name: 'resume', link: '/resume'},
 ]
  const navigation = navLinks.map(item =>
    <NavItem key={item.name} active={router.pathname == `${item.link}` ? 'true' : 'false'}>
      <Link href={item.link}>
        <span>{item.name}</span>
      </Link>
    </NavItem>
  )
  const lightOn = <span>&#9788;</span>
  const darkOn = <span>&#x263d;</span>
  return (
    <Container>
      <NavList>{navigation}</NavList>
      {theme ?
        <ThemeToggle onClick={toggleTheme}>{theme == 'light' ? darkOn : lightOn}</ThemeToggle>
       : null}
    </Container>
  );
}