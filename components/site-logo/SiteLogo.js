import {Container, Avatar, Wrapper, Title} from "./styled";
import { CurlyBrackets } from "../curly-brackets";
import {theme as staticTheme} from "../../theme"

export default function SiteLogo({size, fontSize}) {
   return (
      <Wrapper>
            <Title fontSize={fontSize}>(form (vs (content))</Title>
            <Container size={size}>
               <Avatar />
            </Container>
      </Wrapper>
  );
}