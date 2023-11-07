import {Container, Avatar, Wrapper} from "./styled";

export default function SiteLogo({size}) {
   return (
      <Wrapper>
         <Container size={size}>
            <Avatar />
         </Container>
      </Wrapper>
  );
}