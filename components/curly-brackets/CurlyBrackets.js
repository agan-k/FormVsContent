import { Container, CurlyBracket } from "./styled";

export default function CurlyBrackets({children, size }) {
  return (
    <Container size={[size]}>
      <CurlyBracket size={size}>&#123;</CurlyBracket>
      {children}
      <CurlyBracket size={size}>&#125;</CurlyBracket>
    </Container>
  );
}