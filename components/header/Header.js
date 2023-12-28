import { useRouter } from "next/router";
import { Nav, SiteLogo } from "../../components";
import { Container } from "./styled";
import {theme as staticTheme} from '../../theme';
import { useMediaQuery } from "../../utils/hooks";
import { MOBILE_BREAKPOINT } from "../../utils/constants";

export default function Header({theme, toggleTheme}) {
  const router = useRouter();
  const isHome = Boolean(router.pathname === '/');
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
  return(
    <Container>
      {isMobile && !isHome &&
        <SiteLogo size={staticTheme.space[4]} />
      }
      <Nav theme={theme} toggleTheme={toggleTheme} />
    </Container>
  );
}