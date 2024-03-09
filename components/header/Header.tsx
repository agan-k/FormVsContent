import { Nav, SiteLogo } from "..";
import { Container, LogoWrapper } from "./styled";
import { useMediaQuery } from "../../utils/hooks";
import { MOBILE_BREAKPOINT } from "../../utils/constants";
import Link from "next/link";

export const Header = () => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  

  return(
    <Container>
      {isMobile && 
        <LogoWrapper>
          <SiteLogo size={({theme}) => theme.space[5]+'px'} />
        </LogoWrapper>
      }
      <Nav />
    </Container>
  );
};