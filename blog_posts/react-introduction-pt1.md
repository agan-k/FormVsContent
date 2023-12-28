---
image: '/assets/reactJS.png'
title: "React, Introduction"
subtitle: "A Somewhat Personal Journey trough a Powerhouse"
date: "Dec 2020 by"
author: 'K. Agan'
signature: "K.Agan - Dec '20, Brooklyn, NY"
---

When I first started getting into [React](https://reactjs.org/) library (framework) I already thought I had a decent sense for what DOM is. I could also write few lines of javascript to manipulate the HTML in the DOM and then style it with some CSS and this is how I was able to build simple websites. This is how one can build anything that a browser is capable of rendering, really. And the experienced ones, who could build anything this way, decided to take it a bit further by building frameworks and libraries in order to increase productivity and enhance performance. I finally arrived at the point where I could no longer avoid dealing with these frameworks. I took a course in React, started building with this new tool and never looked back. However, my transition to React was not exactly smooth and, by sharing my experience here, I'm hoping to provide some insight into certain ways of thinking which might be helpful. 

It is really easy to jump right into it and *npx create-react-app* in the command line that will right out of the box do stuff for us. This is how I started off and it was somewhat counter productive. To be clear, this is not to say that getting your hands dirty and figuring things out on your own is a wrong approach. On contrary, this is how I operate most of the time. However, I also noticed that, had I had some missing pieces of information beforehand, this process would have been much easier. So, jumping straight into the 'tutorial hell' (as someone called it) to obtain some arbitrary solution for our project was not, in my own experience, exactly the best way to do things. Tutorials (even the mediocre ones) are a tremendous resource and absolutely essential for our ever changing ecosystem but a certain balance in our approach needs to be struck in order to keep the growth of our knowledge steady and more seamless.


## The Essentials
So before going any further, here is a short (bare minimum) list which contains topics that are very simple but essential to understanding how React works. Even if already familiar with them, refreshing on these basic concepts is always beneficial. 

* DOM (HTML)
* Basic data types (JavaScript)
* Functions (JavaScript)
* Conditional operator (JavaScript)
* Logical operators (JavaScript)
* Loops (JavaScript)

Notice that five out of six listed topics listed here have to do with javascript. This is very telling. React is very much based on javascript. It is a javascript library and/or framework after all. If you are very familiar with javascript, you'll love React. And if you are only little comfortable with javascript, working with React will in many ways help you become better in javascript. Not only because it will somehow make us more productive (which it will) but also because React itself is a finished product (app) and looking at its well designed architecture will help you grow as a developer.

Reviewing the topics listed above will help us understand these few basic concepts in React:

* The ReactDOM
* React Components
* React Props

## ReactDOM
The first topic has to do with HTML DOM. Here is a great [resource on javascript html DOM](https://www.w3schools.com/js/js_htmldom.asp) but all we need to know about the DOM for now is that React will NOT manipulate the DOM the way javascript does in the traditional (separation of conserns) model - HTML + javascript + CSS. In stead, it will create a "virtual" DOM of its own and have it operate from the "root" container within the body of the *index.html* file.

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

But how does the index.html* display all these new elements without having new elements introduced to it? Again, the new "virtual" [ReactDOM](https://reactjs.org/docs/faq-internals.html) within the class='root'* element will take care of it.

```jsx
ReactDOM.render(element, function)
```
Above, you can see that render()* function takes in two arguments *(element, function)*. The first one being an element (perhaps something like *h1*) and second one is a function which points to the element with the *id='root'* in the original HTML DOM. 
```jsx
ReactDOM.render(<h1>hello!</h1>, document.getElementById('root'))
```
*render()* function will take the element in the first argument *h1* and display it in the *div*  with the *id* of *'root'*, which the function*getElementById()* is pointing to.

We can take this up a notch and, in stead of passing an element for the first argument, we can pass another function.
```jsx
function MyElement() {
   return(<h1>hello from MyElement!</h1>)
}
```
And then we can pass it as the first argument in the *render()* function.
```jsx
ReactDOM.render(<MyElement />, document.getElementById('root'))
```
[Read more](https://gomakethings.com/rendering-content-with-vanilla-javascript/) on how *render()* function works. But notice the self closing tags on *MyElement*. Passing this HTML-like syntax is possible because the *render()* function comes from ReactDOM as a featured method. A big part of React functionality is built around the ability to seamlessly mix these elements with the regular javascript syntax. Learn more about the JSX syntax in the [the docs](https://reactjs.org/docs/introducing-jsx.html).

## React Components
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
In this case the *div* represents a "Parent" for the *h1* and *p* "children".

Lets take the *MyElement()* function and rename it just for the purpose of demonstrating.
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
Components are basic building blocks for React's modular approach in building web apps. [React Component](https://reactjs.org/docs/components-and-props.html), in its most basic form, is a javascript function.


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
What happens here is following. The property *name='MyComponent'* is delivered to the ChildComponent as a *key: 'value'* pair inside of an *object*.
```javascript
props: {
   name: 'MyComponent'
}
```
The ChildComponent accepts it as an argument *(props)*
```jsx
function ChildComponent(props) {...}
```
and returns the *'value'* of the *'key'* *name:*
```jsx
{props.name}
```
Notice the curly braces used on *{props.name}*. This is how we can inject javascript anywhere inside the *return()* statement.

And so, we have successfully passed information from one component to another and finally rendered it in our *index.html* for it to be displayed in the browser.
<img class='markdown-img' src='/assets/content/posts/react_article/hello_from_parent_component.png' />
Now, think about it. We did not touch the original DOM. We didn't have to introduce any new elements and therefore it did not need to reload.

## Conclusion
We touched upon some of the topics from the above Essentials list. The DOM relates to ReactDOM, functions relate to React Components and we made use of some of the basic data types such as variables (arguments) and objects. In the next article we will take a look at conditional rendering. For this we will need to relay on what we know about *logical operators* and *conditional statements*.

