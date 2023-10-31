import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, NavItem, NavList } from './styled';


export default function Nav() {
  const router = useRouter();

  const navLinks = [
    {name: 'home', link: '/'},
    {name: 'blog', link: '/blogHome'},
    {name: 'resume', link: '/about'},
 ]
  const navigation = navLinks.map(item =>
    <NavItem key={item.name} active={router.pathname == `${item.link}` ? 'true' : 'false'}>
      <Link href={item.link}>
        <span>{item.name}</span>
      </Link>
    </NavItem>
  )
  return (
    <Container>
      <NavList>{navigation}</NavList>
    </Container>
  );
}