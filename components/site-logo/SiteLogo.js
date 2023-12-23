import {Container, Avatar, Wrapper} from "./styled";
import { CurlyBrackets } from "../curly-brackets";
import {theme as staticTheme} from "../../theme"

export default function SiteLogo({size}) {
   return (
      <Wrapper>
            <Container size={size}>
               <Avatar />
            </Container>
      </Wrapper>
  );
}