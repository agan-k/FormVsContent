---
image: '/assets/reactJS.png'
title: "Conditional Rendering in React - A Somewhat Personal Jurney trough a Powerhouse - Pt.2"
date: "Dec 2020 by"
author: 'K. Agan'
---

In the first part of the introductory post on React we talked about how the framework, with just a few of its basic concepts, operates and how it delivers content to the HTML DOM. In this part we'll start using some javascript magic and see how with some basic programing tools we can deliver content in a more dynamic fashion. We are also going to start getting our hands dirty and go trough the necessary steps to start developing with React.
<!-- 
```jsx
import React from 'react'

export default function MyComponent() {
   const banana = {
      description: '',
      fact: 'they go bad too fast!'

   }
   return (
      <div>
         <h1>My Component</h1>
         <h3>Renders:</h3>
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
         <h2>Child Component</h2>
         <p>Content of Child Component is here:</p>

         {props.banana ? 
            <>
            <li>Lets talk about bananas!</li>
            <li>What is your opinion on bananas?</li>
            </>
            : ''
      }
         {props.answer ? 
            <h4>{props.answer} {props.banana.fact}</h4>
            : ''
      }
      </div>
   )
}
``` -->

## Installation


If you haven't installed **Node.js** and **npm** you can do so now by going to [Node.js](https://nodejs.org/en/download/). This will also install the latest **npm** package.

After the instalation is completed, you can check for versions by running:

```zsh
~ node -v
```
and

```zsh
~ npm -v
```
Next, lets create the React app.
```zsh
~ npm create react-app react-conditional-rendering
```
Cd in to react-conditional-rendering directory.
```zsh
~ cd react-conditional-rendering
```
One thing that I find helpful is opening the editor right from the current directory in your terminal. If you are using VS Code you can choose this option in the [settings](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) and run:
```zsh
~ code .
```
Alternatively you can open the folder (react-conditional-rendering) from your editor.

<hr/>
Feel free to look around all the folders. Looking inside the React starter project for the first time can be somewhat overwhelming and for me personally it was intimidating. Lets get rid of most of the things so we can focus on the basic inner workings of the React application. We will mostly work with the */public* and */src* folders. Go ahead and delete everything inside of these two folders. We will recreate the necesery files from the scratch so we can have a better understanding of how all the moving parts fit together. You can leave */node_modules* folder untouched and go ahead and delete everything in the root folder, except the *package.json* file. Your editors explorer should look something like this:
<img class='markdown-img' src='/assets/content/posts/react_article/react-starter.png' />

## The HTML DOM

In the */public* folder, lets go to the terminal and touch <span class='command'>index.html</span> file in the */public* folder.
```zsh
~ cd public && touch index.html
```
Now, lets create a new HTML document in our <span class='command'>index.html</span> file.
```html
<!DOCTYPE html>
<html>
   <body>
      
   </body>
</html>
```
Again, we are ommiting any unnecessary elements and keeping things extra skim and keep better overview.

As we mentioned in the [first part](/posts/react-introduction-pt1) of the article, The ReactDOM renders its new elements in an HTML *element* which carries the *id* of *'root'* in our original DOM. Lets place one such element inside of our <span class='command'>index.html</span> file.
```html
<!DOCTYPE html>
<html>
   <body>
      <div id='root'>
         <!-- ReactDOM will render stuff here! -->
      </div>
   </body>
</html>
```



