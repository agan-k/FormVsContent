import { useEffect } from "react";
import { useRouter } from "next/router";
import { Nav, SiteLogo } from "../../components";
import { Container, LogoWrapper } from "./styled";
import {theme as staticTheme} from '../../theme';
import { useMediaQuery } from "../../utils/hooks";
import { MOBILE_BREAKPOINT } from "../../utils/constants";
import Link from "next/link";

export default function Header({theme, toggleTheme}) {
  const router = useRouter();
  const isHome = Boolean(router.pathname === '/');
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
  useEffect(() => {
    localStorage.setItem('background', theme);
    console.log('next: ', localStorage.background)
  }, [theme])
  return(
    <Container>
      {isMobile && 
        <LogoWrapper>
          <Link href={'/'}>
            <SiteLogo size={staticTheme.space[5]} />
          </Link>
        </LogoWrapper>
      }
      <Nav theme={theme} toggleTheme={toggleTheme} />
    </Container>
  );
}