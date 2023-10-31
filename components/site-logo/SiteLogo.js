import { Container, Avatar } from "./styled";

export default function SiteLogo() {
  return (
    <Container>
      <Avatar/>
      <h1>{'(form (vs (content)))'}</h1>
         <a href='https://www.linkedin.com/in/koran-agan/' target='_blank'>
            Linkedin
         </a>
         &nbsp;
         <a href='mailto:koranagan@gmail.com'>
            E-mail
         </a>
         &nbsp;
         <a href='https://github.com/agan-k'  target='_blank'>
            GitHub
         </a>
    </Container>
  )
}