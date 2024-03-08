'use client';

import { useState, useContext } from 'react';
import {ThemeContext} from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, NavItem, NavList } from './styled';
import {ThemeToggle, SiteLogo, CurlyBrackets, NavToggle} from '../../components';
import {theme as staticTheme} from '../../theme';
import { useMediaQuery } from '../../utils/hooks';
import { MOBILE_BREAKPOINT, navLinks, extLinks } from '../../utils/constants';

export default function Nav() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const theme = useContext(ThemeContext);
  const router = useRouter(); 
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  function HandleToggleNav() {
    setIsOpenNav(!isOpenNav);
  }
  
  const navigationRoutes = navLinks.map(item =>
    <NavItem key={item.name} active={router.pathname == `${item.link}` ? true : false}>
      <Link href={item.link} onClick={() => HandleToggleNav()}>
        {item.name}
      </Link>
    </NavItem>
  )
  const navigationExternal = extLinks.map(item =>
    <NavItem key={item.name}>
      <Link href={item.link}>
        {item.name}
      </Link>
    </NavItem>
  )
  const lightOn = <span>&#9788;</span>
  const darkOn = <span>&#x263d;</span>

  return (
    <Container 
    isMobile={isMobile} 
    isOpenNav={isOpenNav}
    >
      {isMobile && (
        <NavToggle onClick={() => HandleToggleNav()} isOpenNav={isOpenNav} />
      )}
      <NavList isMobile={isMobile}>
        {navigationRoutes}
        {isMobile && navigationExternal}
        {isMobile && theme ?
          <ThemeToggle 
            toggleNav={HandleToggleNav}
          /> : null}
      </NavList>
      {!isMobile ?
        <>
          <SiteLogo size={[staticTheme.space[5]]} fontSize={staticTheme.fontSizes[1]} />
          <NavList>
            {navigationExternal}
          </NavList>
          <ThemeToggle />
        </> : null
      }
    </Container>
  );
}