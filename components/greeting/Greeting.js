import { Badge } from "../badge"
import { GreetingWrapper } from "./styled"

export default function Greeting() {
  return(
    <GreetingWrapper>
      <p>
       <strong>Hello, my name is Koran.</strong>
      </p>
      <p> 
        I am a Brooklyn based Web Developer who specializes 
        in Frontend Engineering. I made may first website in 1998, when people would 
        engage in “surfing” the wild west; that Internet once was. When content was in 
        the forefront, never spoon-fed to us and we were allowed to discover it on our 
        own. Yes, I do feel nostalgic about those times. 
      </p>
      <p>
        But I am also very excited about 
        where we are today. It’s a great time to develop software for the web. Be it as a 
        one man shop or working as a part of a large engineering team, throughout the 
        years I helped many place their unique ideas into the digital space. In 2018 I 
        started FormVsContent, a place where I can share my projects, experiment and 
        ponder.
        </p>
      <p>
        I am also a musician, and not only by night. I feel like I am musician all the 
        time, even when I write code. Ever since I wrote my first algorithm in 
        Scheme and watched the several lines of code in their little recursive dance, 
        programming has reflected a lot of meaning for me. Kind of like music.
      </p>
      <p>
        I am always looking to collaborate so if you have a great idea please feel free 
        to drop me a note.
      </p>
      <p>Thanks for stopping by!</p>
    </GreetingWrapper>
  )
}