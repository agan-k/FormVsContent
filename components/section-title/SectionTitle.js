import {CurlyBracket, Container, Wrapper} from './styled';

export default function SectionTitle({children}) {
  return (
    <Wrapper>
      <Container>
        <CurlyBracket>&#123;</CurlyBracket>
        <h1>{children}</h1>
        <CurlyBracket>&#125;</CurlyBracket>
      </Container>
    </Wrapper>
  )
}