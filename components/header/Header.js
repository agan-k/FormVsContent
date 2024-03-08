import { Nav, SiteLogo } from "../../components";
import { Container, LogoWrapper } from "./styled";
import {theme as staticTheme} from '../../theme';
import { useMediaQuery } from "../../utils/hooks";
import { MOBILE_BREAKPOINT } from "../../utils/constants";
import Link from "next/link";

export default function Header() {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  return(
    <Container>
      {isMobile && 
        <LogoWrapper>
          <Link href={'/'}>
            <SiteLogo size={staticTheme.space[5]} />
          </Link>
        </LogoWrapper>
      }
      <Nav />
    </Container>
  );
}