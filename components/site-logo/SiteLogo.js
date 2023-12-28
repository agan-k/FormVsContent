import {Container, Avatar, Wrapper, Title} from "./styled";
import { CurlyBrackets } from "../curly-brackets";
import {theme as staticTheme} from "../../theme"

export default function SiteLogo({size, fontSize = null, title = false}) {
   return (
      <Wrapper>
         <CurlyBrackets size={size}>
            {title && (
               <Title fontSize={fontSize}>(form (vs (content))</Title>
            )}
            <Container size={size}>
               <Avatar size={size}/>
            </Container>
         </CurlyBrackets>
      </Wrapper>
  );
}