import {SiteLogo} from "../site-logo";
import {theme as staticTheme} from '../../theme'
import { CurlyBrackets } from "../curly-brackets";
import {Container} from "./styled";


export default function Badge() {
  return(
    <Container>
      <CurlyBrackets size={staticTheme.space[6]}>
        <SiteLogo size={[staticTheme.space[6]]}/>
      </CurlyBrackets>
    </Container>
  );
}