import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, NavItem, NavList } from './styled';
import {ThemeToggle, SiteLogo, NavToggle} from '..';
import { useMediaQuery } from '../../utils/hooks';
import { MOBILE_BREAKPOINT, navLinks, extLinks } from '../../utils/constants';

export const Nav = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const router = useRouter(); 
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  function HandleToggleNav() {
    setIsOpenNav(!isOpenNav);
  }
  
  const navigationRoutes = navLinks.map(item =>
    <NavItem key={item.name} active={router.pathname == `${item.link}` ? true : false}>
      <Link href={item.link} onClick={() => setIsOpenNav(!isOpenNav)}>
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
        <NavToggle toggleNav={() => setIsOpenNav(!isOpenNav)} isOpenNav={isOpenNav} />
      )}
      <NavList isMobile={isMobile}>
        {navigationRoutes}
        {isMobile && navigationExternal}
        {isMobile ?
          <ThemeToggle 
            toggleNav={() => setIsOpenNav(!isOpenNav)}
          /> : null}
      </NavList>
      {!isMobile ?
        <>
          <SiteLogo size={({theme}) => theme.space[5]+'px'} fontSize={({theme}) => theme.fontSizes[1]+'px'} />
          <NavList>
            {navigationExternal}
          </NavList>
          <ThemeToggle toggleNav={setIsOpenNav} isOpenNav={isOpenNav} />
        </> : null
      }
    </Container>
  );
}