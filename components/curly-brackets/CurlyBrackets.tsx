import { ReactNode } from "react";
import { Container, CurlyBracket } from "./styled";

interface CurlyBracketProps {
  children: ReactNode
  size: ({theme}) => string
}

export const CurlyBrackets: React.FC<CurlyBracketProps> = ({
  children, 
  size,
}) => {
  return (
    <Container>
      <CurlyBracket size={size}>&#123;</CurlyBracket>
        {children}
      <CurlyBracket size={size}>&#125;</CurlyBracket>
    </Container>
  );
}