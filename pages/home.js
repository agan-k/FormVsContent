import { 
  LandingWrapper, 
  BracesWrapper, 
  ImageWrapper, 
  LogoWrapper,
  BraceLeft,
  BraceRight,
} from "../styles/styled";

export default function Home() {
  const braceLeft = <>&#123;</>;
  const braceRight = <>&#125;</>;
  return(
    <LandingWrapper>
      <LogoWrapper>
        <BracesWrapper>
          <BraceLeft>{braceLeft}</BraceLeft>
          <ImageWrapper>
            <img src="assets/sailin.jpg"/>
          </ImageWrapper>
          <BraceRight>{braceRight}</BraceRight>
        </BracesWrapper>
      </LogoWrapper>
    </LandingWrapper>
  )
}