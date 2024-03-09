import {Avatar, Wrapper, Title} from "./styled";
import { CurlyBrackets } from "../curly-brackets";

interface SiteLogoProps {
   size: ({theme}) => string
   title?: boolean
   fontSize?: ({theme}) => string
}

export const SiteLogo: React.FC<SiteLogoProps> = ({
   size,
   fontSize = null,
   title = false,
}) => {
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
};