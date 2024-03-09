import { GreetingWrapper } from "./styled"

export const Greeting = () => {
  return(
    <GreetingWrapper>
      <p>
       <strong>Hello, my name is Koran.</strong>
      </p>
      <p>
        I am a front-end-focused Software Developer based in 
        Brooklyn, NY. I build web applications with an emphasis on scalable front-end 
        architecture. I specialize in user experience and content management systems. You can download 
        my resume <a href="/assets/content/Resume_Koran_Agan.pdf" target="_blank">here</a>.
      </p>
      <p>
        I am always looking to collaborate, so if you have a great idea, please drop me a 
        note.
      </p>
      <p>Thanks for stopping by!</p>
    </GreetingWrapper>
  );
};