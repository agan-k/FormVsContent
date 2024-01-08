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
            <>
               <Avatar size={size}/>
            </>
         </CurlyBrackets>
      </Wrapper>
  );
}