---
image: '/assets/reactJS.png'
title: "Conditional Rendering in React - A Somewhat Personal Jurney trough a Powerhouse - Pt.2"
date: "January 2021 by"
author: 'K. Agan'
---

In the [first part](react-introduction-pt1) of the introductory post on React we talked about how the framework operates and how it delivers content to the HTML DOM. In this part we'll start adding little bit of javascript magic to see how with some basic programing tools we can deliver content in a more dynamic fashion. We are also going to start getting our hands dirty and go trough the necessary steps to start developing with React.

## Installation


If you haven't installed **Node.js** and **npm** yet, you can do so now by going to [Node.js](https://nodejs.org/en/download/). This will also install the latest **npm** package.

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
~ npm create react-app react-intro
```
Cd in to react-intro directory.

```zsh
~ cd react-intro
```
One thing that I find helpful is opening the editor right from the current directory in your terminal. If you are using VS Code you can choose this option in the [settings](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) and run:

```zsh
~ code .
```
Alternatively you can open the folder (react-conditional-rendering) from your editor.

Looking inside the React starter project for the first time can be somewhat overwhelming and for me personally it was even intimidating. Lets get rid of most of the things so we can focus on the basic inner workings of the React application. We will mostly work with the */public* and */src* folders. Go ahead and delete everything inside of these two folders. We will recreate the necesery files from scratch so we can have a better understanding of how all the moving parts fit together. You can leave */node_modules* folder untouched and go ahead and delete everything in the root folder, except for the *package.json* file. Your editors explorer should look something like this:
<img class='markdown-img' src='/assets/content/posts/react_article/react-starter.png' />


## The HTML DOM
<hr/>

In the */public* folder, lets go to the terminal and touch <span class='command'>index.html</span> file.

```zsh
~ cd public && touch index.html
```
Now, let's create a new HTML document in our <span class='command'>index.html</span> file.

```html
<!DOCTYPE html>
<html>
   <body>
      
   </body>
</html>
```
Again, we are ommiting any unnecessary elements and keeping things extra skim to maintain a clear overview.

As we mentioned in the [first part](react-introduction-pt1) of the article, The ReactDOM renders its new elements in the original DOM, in an HTML *element* which carries the *id* of *'root'*. Lets place one such element inside of our <span class='command'>index.html</span> file.
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



## Rendering React Elements
<hr/>

In order to serve the newly created *elements* to the DOM we will need to touch a new file in the */src* folder. From the react-intro directory:
```zsh
~ cd src && touch index.js
```
Lets first look at our *package.json* file for a moment.

```json
{
  "name": "react-intro",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  },
```
The first object in the file lists the available "dependencies". This is where we can find anything we might later add to our project. Things like "react-router-dom" or some add-ons like "font-awesome" etc. Basically anything we might aquire from the extensive list of available packages which we could use in our project.

Once the package is added to our list of "dependencies" all we need to do is import it to our corresponding file. Lets import the necessery packages for our <span class='command'>index.html</span> file.
```jsx
import React from "react"
import ReactDOM from "react-dom"
```
And just like that, these resources are now available to us. Let's use ReactDOM and call the <span class='command'>render()</span>method on it. 
```jsx
ReactDOM.render(<h1></h1>, document.getElementById('root'))
```
As discussed in [part one](/posts/react-introduction-pt1), the <span class='command'>render()</span> method will take two arguments. One React element (in this case a JSX heading), and one function which points to the *div* element with the *id* of *'root'* in the <span class='command'>index.html</span> file. 
```jsx
import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(<h1>Check, check! This mic is on!</h1>, document.getElementById('root'))
```
This should tell the <span class='command'>index.html</span> file to display "Check, check! This mic is on!" in the browser.

From the react-intro directory:
```zsh
~ npm run start
```
Go to your browser and navigate to  
http://localhost:3000/
<img class='markdown-img' src='/assets/content/posts/react_article/check.png' />

Now that we are connected to our local host, we can start developing. Lets try and make some components.


## Creating Components 
<hr/>

<h3>Top Level Component</h3>

At the moment we are rendering just a heading in our <span class='command'>index.js</span> file. Let's create our top level component and use it to consolidate all of the elements from our app into a single place. Then, we can pass this top level component in the <span class='command'>index.html</span> file as the first argument of our <span class='command'>render()</span> method. By convention, this top level component is named ***App.js*** but for our demostrative pourposes lets name it ***Parent.js***.

Let's touch ***Parent.js*** file in the */src* folder. From the react-intro directory:

```zsh
~ cd src && touch Parent.js
```
In our editor, inside of the ***Parent.js*** file, let's first import the React dependency and make the library available to this file.

```jsx
import React from 'react'
```
Next, let's create our component by making a function and naming it *Parent*.

```jsx
function Parent() {
   return()
}
```
At this point we can guess that, by React convention, the component names are capitalized.

To return React elements in our function we simply place them inside of the <span class='command'>return()</span> statement.

```jsx
function Parent() {
   return(
      <div>
         <h1>My Component</h1>
         <h3>Check, 1, 2...</h3>
      </div>
   )
}
```
Notice that we wrapped the two headings in to a **`<div>`** element. This is because, as we mentioned in [part one](react-introduction-pt1), there can only be one parent element in side of a return statement. This pattern of consolidation continues as we dig deeper in to the cluster of our application.

One last thing we need to do before we pass our Parent component in <span class='command'>ReactDOM.render()</span>  is make sure we export it.

```jsx
export default Parent
```

Our */src/Parent.js* file should look like this:

```jsx
import React from 'react'

function Parent() {
   return(
      <div>
         <h1>Parent Component</h1>
         <h3>Check, 1, 2...</h3>
      </div>
   )
}
export default Parent
```

We can now pass the Parent component in our <span class='command'>index.js</span> file. First, let's import it.
```jsx
import Parent from './Parent'
```
Then, we can pass it in our <span class='command'>render()</span> method.
```jsx
import React from "react"
import ReactDOM from "react-dom"
import Parent from './Parent'

ReactDOM.render(<Parent />, document.getElementById('root'))
```

If your server is not running, start it again with.

```zsh
~ npm run start
```
Your browser at <a href='http://localhost:3000' target='_blank'>http://localhost:3000</a> should now display the **`<Parent />`** component with all of its elements.

<img class='markdown-img' src='/assets/content/posts/react_article/parent_check.png' />


<h3>Child Component</h3>

Now that we have successfully rendered our top level component, let's create more content by adding a child component.

From the react-intro directory:

```zsh
~ cd src && touch Child.js
```

In our editor, let's follow the same process as we did with *Parent.js*.

- import dependencies
- create <span class='command'>function Child()</span> with a <span class='command'>return()</span> statement in the body
- export the <span class='command'>function Child()</span>

*/src/Child.js*
```jsx
import React from 'react'

function Child() {
   return (
      <div>
         <h2>Child Component</h2>
         <p>Content of Child Component is here:</p>
      </div>
   )
}
export default Child
```

After adding some content, in this case a heading and a paragraph, let's render our new **`<Child />`** component inside of the Parent component. First we need to import it.

```jsx
import Child from './Child'
```

And finally, right underneath **`<hr/>`** tag (just to visualy separate the content of the two components), we pass it inside of the <span class='command'>return()</span> statement.

*/src/Parent.js*
```jsx
import React from 'react'
import Child from './Child'

function Parent() {
   return (
      <div>
         <h1>Parent Component</h1>
         <h3>Check, 1, 2...</h3>

         <hr/>

         <Child />

      </div>
   )
}
export default Parent
```
If your server is not running already, start it from the react-intro directory.

```zsh
~ npm run start
```

And back at your browser at <a href='http://localhost:3000' target='_blank'>http://localhost:3000</a> we should see the elements (separated by the horizontal rule) of both **`<Parent />`** and **`<Child />`** components.

<img class='markdown-img' src='/assets/content/posts/react_article/passing_child.png' />

And so we have managed to pass some static content from one component to another. Now let's explore how we can use React Props to move some content around in a more programmatic fashion.

## Using Props as a Condition for Rendering

<hr/>

In this part we will go over:

<h3 class='indent'>1. Passing props from top level component to a child component</h3>
<h3 class='indent'>2. Storing data and asigning it to props</h3>
<h3 class='indent'>3. Using conditional statements to render content inside of components</h3>

<!-- - Passing props from top level component to a child component
- Storing data and asigning it to props
- Using conditional statements to render content inside of components -->

<h3>1. Passing Props</h3>

Let's pass a simple prop from the **`<Parent />`** component directly to the **`<Child />`** component like so: **`<Child prop_name='prop_value' />`**

*/src/Parent.js*

```jsx
import React from 'react'
import Child from './Child'

function Parent() {
   return (
      <div>
         <h1>Parent Component</h1>
         <h3>Check, 1, 2...</h3>

         <hr/>

         <Child message='Hi there!' />

      </div>
   )
}
export default Parent
```

In order to accept the props from the Parent component, we need to pass them as an argument in the <span class='command'>function Child()</span>.

```jsx 
function Child(props) {...}
```

Let's also slightly edit the content of the Child component just for the demostrative pourposes.

```jsx
import React from 'react'

function Child(props) {
   return (
      <div>
         <h2>Child Component</h2>
         <p>A message from my Parent says:</p>
         <h3>{props.message}</h3>
      </div>
   )
}
export default Child
```
Let's check our browser again at <a href='http://localhost:3000' target='_blank'>http://localhost:3000</a>

<img class='markdown-img' src='/assets/content/posts/react_article/hi_there.png' />




We managed to distribute the content from one component to another, avoided repetition in our code while relying on a more programmatic aproach. The difference between hard coding a simple sentance for the second time and passing it on, the way we just did, might not seem significant at first. However, if we can imagine greater amount of information (in forms of multiple paragraphs, lists, images etc.) being destributed across several child components, then the potential of this approach becomes more apparent.

<h3>2. Storing Data and Passing it to Props</h3>

Now let's back up for a moment and take a look at the syntax inside our **`<h3></h3>`** within the Child component.
```jsx
<h3>{props.message}</h3>
```
This tells us that props is carrying the information in a form of an [object](https://www.w3schools.com/js/js_objects.asp). 

```json {
   props = {
     "message": "hi"
  }
```
Which means that we can pass multiple properties inside and use them to pass different kind of information.

```json {
   props = {
     "message": "hi",
     "message2": "call me back",
     "toad": "Not eactly a frog!"
  }
```

Let's place an Object inside of the body of our <span class='command'>function Parent()</span> component like so.

```jsx
function Parent() {

   const banana = {
      exists = true,
      ripe: true,
      fact: 'They go bad too fast!',
   }

   return (...)
}
```
Now we can pass different peices of information and use them as a condition to render different elements inside the **`<Child />`** component.


<h3>3. Using Conditional Expression to Render the Content</h3>

Now let's make it so that the **`<Child />`** component will show itself in the browser only if our object property <span class='command'>exists:</span> evaluates to boolean <span class='command'>true</span> value.

***<h3 class='indent'>The Conditional Operator</h3>***

Let's quickly review what the Conditional Operator is and how it works. Here is a simple conditional statement.

```javascript
if (some condition == true) {
   // do something
} else {
   // do nothing
}
```
For this conditional statement to work inside of a <span class='command'>return()</span>statement, within the <span class='command'>function Parent()</span> component, we need to converte it in to an expression. For this we can use the Conditional Operator like so:

```javascript
 condition == true ? <Child /> : ''
```
The line above reads as follows:  
If (?) **<span class='command'>condition</span>** is (==) **<span class='command'>true</span>**,  
then (produce this value) **<span class='command'>`<Child />`</span>**  
**<span class='command'>:</span>** (else),  
(produce a falsy value ) **' '**.

In the beginning, after using conditional statements, it took me a minute to get used to this javascript ternary expression. The Conditional Operator is generally considered slightly less 'readable', compared to *if/else* statements. However, when used apropriately, with time it becomes easier on our eyes.

We could further simplyfy our expression above.
```javascript
 condition ? <Child /> : ''
```
This would simply read as: 
is there such a thing as **<span class='command'>condition</span>** and if so, is it true?

***<h3 class='indent'>Guard Operator</h3>***

A common practice is to use *logical operator* <span class='command'>&&</span>, in this context sometimes refferd to as ***guard operator***.

```javascript
 condition && (<Child />)
```
This line of code above will execute if both sides of *logical operator* <span class='command'>&&</span> evaluate to truthy. In other words if they both exist.

<hr/>

Let's use the ***guard operator*** from above to conditionaly render our **`<Child />`** component inside of the <span class='command'>function Parent()</span> component.

First, let's set up our **`<Child />`** component by including some relevant content about the ***banana***!

*/src/Child.js*
```jsx
import React from 'react'

function Child(props) {
   return (
      <div>
         <h2>Child Component</h2>
         <h3>Let's talk Banana!</h3>
      </div>
   )
}
export default Child
```
Then, lets employ the conditional rendering.

*/src/Parent.js*
```jsx
import React from 'react'
import Child from './Child'

function Parent() {

   const banana = {
      exists = true,
      ripe: true,
      fact: 'They go bad too fast!',
   }

   return (
      <div>
         <h1>Parent Component</h1>
         <h3>Renders:</h3>
         <hr />
         {banana.exists && (<Child />)}
      </div>
   )
}
export default Parent
```
The way we set up our conditional rendering for the **`<Child />`** component reads something like this: If ***banana.exists*** is evaluating to <span class='command'>true</span>, and if there is an element identified as **`<Child />`**, then include that particular element inside of this <span class='command'>return()</span> statement.

If we look in our browser at <a href='http://localhost:3000' target='_blank'>http://localhost:3000</a>

<img class='markdown-img' src='/assets/content/posts/react_article/lets_talk_banana.png'  />

Now, inside the **banana** object change the propery <span class='command'>exist: true</span> to <span class='command'>exist: false</span> and watch the **`<Child />`** component dissapear from the browser.

Let's take it just a bit further and render some more elements inside of the Child component using the Conditional Operator.

*/src/Child.js*
```jsx
import React from 'react'

function Child(props) {
   return (
      <div>
         <h2>Child Component</h2>
         <h3>Lets talk Banana!</h3>
         {
            props.ripe ?
               <div>
                  <h4>Known fact about bananas:</h4>
                  <li>{props.fact}</li>
               </div>
               : 
               <h3>These bananas are green</h3>
         }
      </div>
   )
}
export default Child
```
The Conditional Operator from above can be read as: if (<span class='command'>?</span>) <span class='command'>props.ripe</span> evaluates to <span class='command'>true</span>, include elements `<h4>` (containing a string 'Known fact..') and `<li>` (containing the value of <span class='command'>props.fact</span>), else (<span class='command'>:</span>) include the  element `<h3>` with its content.

And let's make sure all the required props are passed to the Child component.

*/src/Parent.js*
```jsx
import React from 'react'
import Child from './Child'

function Parent() {

   const banana = {
      exists = true,
      ripe: false,
      fact: 'They go bad too fast!',
   }

   return (
      <div>
         <h1>Parent Component</h1>
         <h3>Renders:</h3>
         <hr />
         {banana.exists && (
            <Child 
               ripe={banana.ripe}
               fact={banana.fact}
            />
         )}
      </div>
   )
}
export default Parent
```
Let's make sure it works in our browser at <a href='http://localhost:3000' target='_blank'>http://localhost:3000</a>
<img class='markdown-img' src='/assets/content/posts/react_article/green_bananas.png' />

Now, change the property <span class='command'>ripe: false</span> inside the banana object to <span class='command'>ripe: true</span> and watch the content of the **`<Child />`** component change in the browser.
<img class='markdown-img' src='/assets/content/posts/react_article/banana_fact.png' />



And that would conclude our part on conditional rendering. In the next article we will learn about class components, state and event handlers. These concepts will give us the ability to render elements based on user input.

<hr/>
<p class='signature'>K.Agan - Dec '20, Brooklyn NY</p>



