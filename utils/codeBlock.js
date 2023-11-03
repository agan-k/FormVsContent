import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
//changing 'esm' distribution to 'cjs' fixed the SyntaxError: Unexpected token 'export'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'; 

export const codeBlock = ({ language, value }) => {
   return (
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
         {value}
      </SyntaxHighlighter> 
   )
 }