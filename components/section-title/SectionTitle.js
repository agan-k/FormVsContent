import {CurlyBracket, Container, Wrapper, Title} from './styled';

export default function SectionTitle({children}) {
  return (
    <Container>
      <CurlyBracket>&#123;</CurlyBracket>
      <Title>{children}</Title>
      <CurlyBracket>&#125;</CurlyBracket>
    </Container>
  )
}