'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, NavItem, NavList } from './styled';
import {ThemeToggle, SiteLogo, CurlyBrackets} from '../../components';
import {theme as staticTheme} from '../../theme';
import { useMediaQuery } from '../../utils/hooks';
import { MOBILE_BREAKPOINT } from '../../utils/constants';

export default function Nav({theme, toggleTheme}) {
  const router = useRouter(); 
  const isBreakpoint = useMediaQuery(MOBILE_BREAKPOINT)
  const navLinks = [
    {name: 'home', link: '/'},
    {name: 'blog', link: '/blog'},
    {name: 'resume', link: '/resume'},
  ]
  const extLinks = [
    {name: 'GitHub', link: 'https://www.github.com/agan-k'},
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/koran-agan/'},
    {name: 'email', link: 'mailto:koranagan@gmail.com'},
  ]
  const navigationRoutes = navLinks.map(item =>
    <NavItem key={item.name} active={router.pathname == `${item.link}` ? 'true' : 'false'}>
      <Link href={item.link}>
        <span>{item.name}</span>
      </Link>
    </NavItem>
  )
  const navigationExternal = extLinks.map(item =>
    <NavItem key={item.name}>
      <Link href={item.link}>
        <span>{item.name}</span>
      </Link>
    </NavItem>
  )
  const lightOn = <span>&#9788;</span>
  const darkOn = <span>&#x263d;</span>
  return (
    <Container>
      <NavList>
        {navigationRoutes}
        {isBreakpoint && theme ?
          <ThemeToggle onClick={toggleTheme}>
            {theme == 'light' ? darkOn : lightOn}
          </ThemeToggle> : null}
      </NavList>
      {!isBreakpoint ?
        <>
        <CurlyBrackets size={staticTheme.space[5]}>
            <SiteLogo size={[staticTheme.space[5]]}/>
        </CurlyBrackets>
          <NavList>
            {navigationExternal}
            {theme ?
              <ThemeToggle onClick={toggleTheme}>
                {theme == 'light' ? darkOn : lightOn}
              </ThemeToggle> : null}
          </NavList>
        </> : null
      }
    </Container>
  );
}