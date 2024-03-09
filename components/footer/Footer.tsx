import {
  Copyright, 
  FooterContainer, 
  LogosContainer,
  LogoWrapper,
} from './styled';
import {currentYear} from '../../utils';
import stackData from '../../data/stackData';


export const Footer = () => {
  return (
    <FooterContainer>
      <LogosContainer>
        {stackData.map(logo =>
        <LogoWrapper key={logo.src}>
          <img src={logo.src} />
        </LogoWrapper>
        )}
      </LogosContainer>
      <Copyright>
        ©{currentYear} FormVsContent
      </Copyright>
    </FooterContainer>
  );
};