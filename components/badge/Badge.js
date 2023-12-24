import {SiteLogo} from "../site-logo";
import {theme as staticTheme} from '../../theme'
import {Container, LinksContainer} from "./styled";


export default function Badge() {
  return(
    <Container>
        <SiteLogo size={[staticTheme.space[6]]}/>
    </Container>
  );
}