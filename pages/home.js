import { LandingWrapper, LogoContainer, ImageContainer, LogoWrapper } from "../styles/styled";
import { CurlyBrackets } from "../components/curly-brackets";
import {theme as staticTheme} from "../theme";

export default function Home() {
  return(
    <LandingWrapper>
      <LogoWrapper>
        <LogoContainer>
          <CurlyBrackets size={staticTheme.space[7]}>
            <ImageContainer>
              <img src="assets/sailin.jpg"/>
            </ImageContainer>
          </CurlyBrackets>
        </LogoContainer>
      </LogoWrapper>
    </LandingWrapper>
  )
}