import { DownloadLink } from "../../styles/styled"
import { Badge } from "../badge"
import { GreetingWrapper } from "./styled"

export default function Greeting() {
  return(
    <GreetingWrapper>
      <p>
       <strong>Hello, my name is Koran.</strong>
      </p>
      <p>
        I am a front-end-focused Software Developer based in 
        Brooklyn, NY. I build web applications and I specialize in the frontend 
        architecture, user experience and content management systems. You can download 
        my resume <a href="/assets/content/resume.pdf" target="_blank">here</a>.
      </p>
      <p>
        I am always looking to collaborate, so if you have a great idea, please drop me a 
        note.
      </p>
      <p>Thanks for stopping by!</p>
    </GreetingWrapper>
  )
}