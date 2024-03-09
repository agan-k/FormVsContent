import { 
  Container,
  Wrapper, 
  BracesWrapper, 
  ImageWrapper, 
  LogoWrapper,
  BraceLeft,
  BraceRight,
  Title,
  TitleWrapper,
} from "./styled";

export const LandingPage = () => {
  const braceLeft = <>&#123;</>;
  const braceRight = <>&#125;</>;
  return(
    <Wrapper>
      <Container>
        <TitleWrapper>
          <Title>(form (vs (content)))</Title>
        </TitleWrapper>
        <LogoWrapper>
          <BracesWrapper>
            <BraceLeft>{braceLeft}</BraceLeft>
            <ImageWrapper>
              <img src="assets/sailin.jpg"/>
            </ImageWrapper>
            <BraceRight>{braceRight}</BraceRight>
          </BracesWrapper>
        </LogoWrapper>
      </Container>
    </Wrapper>
  );
};