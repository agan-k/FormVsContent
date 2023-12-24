'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, NavItem, NavList } from './styled';
import {ThemeToggle, SiteLogo, CurlyBrackets, NavToggle} from '../../components';
import {theme as staticTheme} from '../../theme';
import { useMediaQuery } from '../../utils/hooks';
import { MOBILE_BREAKPOINT } from '../../utils/constants';

export default function Nav({theme, toggleTheme}) {
  const [isOpenNav, setIsOpenNav] = useState(false)
  const router = useRouter(); 
  const isBreakpoint = useMediaQuery(MOBILE_BREAKPOINT);

  useEffect(() => {}, [isOpenNav])

  function HandleToggleNav() {
    setIsOpenNav(!isOpenNav);
  }

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
    <NavItem key={item.name} active={router.pathname == `${item.link}` ? true : false}>
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
    <Container 
    isMobile={isBreakpoint} 
    isOpenNav={isOpenNav}
    >
      {isBreakpoint && (
        <NavToggle onClick={() => HandleToggleNav()} isOpenNav={isOpenNav} />
      )}
      {isBreakpoint && theme ?
        <ThemeToggle onClick={toggleTheme}>
          {theme == 'light' ? darkOn : lightOn}
        </ThemeToggle> : null}
      <NavList isMobile={isBreakpoint}>
        {navigationRoutes}
        {isBreakpoint && navigationExternal}
      </NavList>
      {!isBreakpoint ?
        <>
        <CurlyBrackets size={staticTheme.space[5]}>
          <SiteLogo size={[staticTheme.space[5]]} fontSize={staticTheme.fontSizes[1]} />
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