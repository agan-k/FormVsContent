import React, { Children } from 'react'
import Head from 'next/head'

const banana = {
   side_note: 'Yes, that variable is random!',
   fact: 'they go bad too fast!'
}
function ParentComponent() {
   return (
      <div>
         <h1>Parent Component</h1>
         <h3>Content of the Parent Component is here</h3>
         <hr />
         <ChildComponent
            banana={banana}
            answer='In my experience,'
         />
      </div>
   )
}

function ChildComponent(props) {
   return (
      <div>
         <Head>
            <title>...</title>
         </Head>
         <h3>Child Component</h3>
         <p>This is some content of the Child Component:</p>
         {props.banana ?
            <>
               <li>Lets talk about bananas!</li>
               <li>What is your opinion on bananas?</li>
            </>
            : ''
         }
         {props.answer && (
            <p>{props.answer} {props.banana.fact}</p>
         )}

      </div>
   )
}

export default function Demo() {
   return (
      <div>
         <div className='parent'>
            <ParentComponent />
         </div>
         
      </div>
   )
}
