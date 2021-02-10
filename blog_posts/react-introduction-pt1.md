---
image: '/assets/reactJS.png'
title: "React - A Somewhat Personal Jurney trough a Powerhouse - Pt.1"
date: "Nov 2020 by"
author: 'K. Agan'
---

When I first started getting into [React](https://reactjs.org/) library (framework) I already thought I had a decent sense for what DOM is. I could also write few lines of javascript to manipulate the HTML in the DOM and then style it with some CSS and this is how I was able to build simple websites. This is how one can build anything that a browser is capable of rendering, really. And the experienced ones, who could build anything this way, decided to take it a bit further by building frameworks and libraries in order to increase productivity and enhance performance. I finally arrived at the point where I could no longer avoid dealing with these frameworks. I took a course in React, started building with this new tool and never looked back. However, my transition to React was not exactly smooth and, by sharing my experience here, I'm hoping to provide some insight into certain ways of thinking which might be helpful. 

It is really easy to jump right into it and <span class="command">npx create-react-app</span> in the command line that will right out of the box do stuff for us. This is how I started off and it was somewhat counter productive. To be clear, this is not to say that getting your heands dirty and figuring things out on your own is a wrong approach. On contrary, this is how I operate most of the time. However, I also noticed that, had I had some missing pieces of information beforehand, this process would have been much easier. So, jumping straight into the 'tutorial hell' (as someone called it) to obtain some arbitrary solution for our project was not, in my own experience, exactly the best way to do things. Tutorials (even the mediocare ones) are a tremendous resource and absolutely essential for our ever changing ecosystem but a certain ballance in our approach needs to be struck in order to keep the growth of our knowledge steady and more seemles.


## The Essentials
---
So before going any further, here is a short (bare minimum) list which contains topics that are very simple but essential to understanding how React works. Even if already familiar with them, refreshing on these basic concepts is always benefitial. 

- DOM (HTML)
- Basic data types (*javascript*)
- Functions (*javascript*)
- Conditional operator (*javascript*)
- Logical operators (*javascript*)
- Loops (*javascript*)

Notice that five out of six listed topics listed here have to do with javascript. This is very telling. React is very much based on javascript. It is a javascript library and/or framework after all. If you are very familiar with javascript, you'll love React. And if you are only little comfortable with javascript, working with React will in many ways help you become better in javascript. Not only because it will somehow make us more productive (which it will) but also because React itself is a finished product (app) and looking at its well designed architecture will help you grow as a developer.

Reviewing the topics listed above will help us understand these few basic concepts in React:

<h3 class='indent'>- The ReactDOM</h3>
<h3 class='indent'>- React Components</h3>
<h3 class='indent'>- React Props</h3>

## ReactDOM
---
The first topic has to do with HTML DOM. Here is a great [resource on javascript html DOM](https://www.w3schools.com/js/js_htmldom.asp) but all we need to know about the DOM for now is that React will NOT manipulate the DOM the way javascript does in the traditional (separation of conserns) model - HTML + javascript + CSS. In stead, it will create a "virtual" DOM of its own and have it operate from the "root" container within the body of the <span class='command'>index.html</span> file.

   ```html
   <!DOCTYPE html>

   <head>
      <title>Some Title</title>
   </head>
   <!-- 
      React will place an element (<div></div>)
      with an id of "root" in the element (<body></body>)
      and do it's magic there!
      -->
   <body>
      <div id="root">
         <!-- 
            Your entire React app lives here!
          -->
      </div>
   </body>
   </html>
   ```

But how does the <span class='command'>index.html</span> display all these new elemants without having new elements introduced to it? Again, the new "virtual" [ReactDOM](https://reactjs.org/docs/faq-internals.html) within the <span class='command'>class='root'</span> element will take care of it.

```jsx
ReactDOM.render(element, function)
```
Above, you can see that <span class='command'>render()</span> function takes in two arguments <span class='command'>(element, function)</span>. The first one being an element (perhaps something like <span class='command'>h1</span>) and second one is a function which points to the element with the <span class='command'>id='root'</span> in the original HTML DOM. 
```jsx
ReactDOM.render(<h1>hello!</h1>, document.getElementById('root'))
```
<span class='command'>render()</span> function will take the element in the first argument <span class='command'>h1</span> and display it in the <span class='command'>div</span>  with the <span class='command'>id</span> of <span class='command'>'root'</span>, which the function<span class='command'>getElementById()</span> is pointing to.

We can take this up a notch and, in stead of passing an element for the first argument, we can pass another function.
```jsx
function MyElement() {
   return(<h1>hello from MyElement!</h1>)
}
```
And then we can pass it as the first argument in the <span class='command'>render()</span> function.
```jsx
ReactDOM.render(<MyElement />, document.getElementById('root'))
```
[Read more](https://gomakethings.com/rendering-content-with-vanilla-javascript/) on how <span class='command'>render()</span> function works. But notice the self closing tags on <span class='command'>MyElement</span>. Passing this HTML-like syntax is possible because the <span class='command'>render()</span> function comes from ReactDOM as a featured method. A big part of React functionality is built around the ability to seemlesly mix these elements with the regular javascript syntax. Learn more about the JSX syntax in the [the docs](https://reactjs.org/docs/introducing-jsx.html).

## React Components
---
It goes without saying that we can pass more than just a single element in our functions. The only thing we need to make sure of is to wrap all the elements in to a single "Parent" element.
```jsx
function MyElement() {
   return(
      <div>
         <h1>child element</h1>
         <p>child element</p>
      </div>
      )
}
```
In this case the <span class='command'>div</span> represents a "Parent" for the <span class='command'>h1</span> and <span class='command'>p</span> "children".

Lets take the <span class='command'>MyElement()</span> function and rename it just for the purpose of demonstrating.
```jsx
function MyComponent() {
   return(
      <div>
         <h1>child element</h1>
         <p>child element</p>
      </div>
      )
}
```
Components are basic building blocks for React's modular aproach in building web apps. [React Component](https://reactjs.org/docs/components-and-props.html), in its most basic form, is a javascript function.


Just the way we can put functions inside of a function, React Components can be passed around in a similar way.
```jsx
function ChildComponent() {
   return(
      <h1>
         I'm on the way to become a child component!
      </h1>
   )
}
```
Passing this new ChildComponent inside the MyComponent will make it in to a child and MyComponent will become its parent.
```jsx
function MyComponent() {
   return(
      <div>
         <ChildComponent />
      </div>
      )
}
```
## Props
---
The way we pass arguments in functions, React Components can do similar with props (properties).
```jsx
function MyComponent() {
   return (
      //passing the property "name"
      <ChildComponent name='MyComponent' />
   )
}
      //accepting properties from the parent
function ChildComponent(props) {
   return (
      <h1>My parent, {props.name} says hello!</h1>
   )
}
```
What happens here is following. The property <span class='command'>name='MyComponent'</span> is delivered to the ChildComponent as a *key: 'value'* pair inside of an *object*.
```javascript
props: {
   name: 'MyComponent'
}
```
The ChildComponent accepts it as an argument <span class='command'>(props)</span>
```jsx
function ChildComponent(props) {...}
```
and returns the *'value'* of the *'key'* <span class='command'>name:</span>
```jsx
{props.name}
```
Notice the curley braces used on <span class='command'>{props.name}</span>. This is how we can inject javascript anywhere inside the <span class='command'>return()</span> statement.

And so, we have succesfully passed information from one component to another and finally rendered it in our <span class='command'>index.html</span> for it to be displayed in the browser.
<img class='markdown-img' src='/assets/content/posts/react_article/hello_from_parent_component.png' />
Now, think about it. We did not touch the original DOM. We didn't have to introduce any new elements and therefore it did not need to reload.

## Conclusion
We touched upon some of the topics from the above Essentials list. The DOM relates to ReactDOM, functions relate to React Components and we made use of some of the basic data types such as variables (arguments) and objects. In the next article we will take a look at conditional rendering. For this we will need to relay on what we know about *logical operators* and *conditional statements*.

<hr/>
<p class='signature'>K.Agan - Dec '20, Brooklyn NY</p>
