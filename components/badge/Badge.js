import {SiteLogo} from "../site-logo";
import {theme as staticTheme} from '../../theme'
import {Container, LinksContainer} from "./styled";


export default function Badge() {
  return(
    <Container>
      <SiteLogo size={staticTheme.space[6] + staticTheme.space[4]}/>
      <LinksContainer>
        <a href='https://www.linkedin.com/in/koran-agan/' target='_blank'>
          Linkedin
        </a>
        &nbsp;
        <a href='mailto:koranagan@gmail.com'>
          E-mail
        </a>
        &nbsp;
        <a href='https://github.com/agan-k'  target='_blank'>
          GitHub
        </a>
      </LinksContainer>
    </Container>
  );
}