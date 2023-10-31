---
image: '/assets/content/posts/recursion_article/javascript_square.png'
title: "Understanding Recursion"
subtitle: "Taking a Closer Look at Recursive Calls"
date: "Nov 2020 by"
author: 'K. Agan'
signature: "K.Agan - Nov '20, Brooklyn, NY"
---


Here is another personal take on a subject I struggled with in the beginning until one of those great 'Aha!' moments which give us the desire to keep tackling new challenges.

Recursion is a concept in which we can make a function call itself inside the body and by doing so produce an effect of a loop. Now, having said that, it took me a minute to realize that in order to wrap my head around a recursive call I had to avoid thinking in terms of iteration. Going back to the top of the function and looping over it every time we evaluate the recursive call is what gets us in trouble. More about it below.

> avoid thinking in terms of iteration. Going back to the top of the function and looping over it every time we evaluate the recursive call is what gets us in trouble.

Lets look at a classic example of writing a function to calculate the factorial of a given positive integer.

Quickly, the <a href="https://en.wikipedia.org/wiki/Factorial" target="blank">factorial</a> of a given number represents a product of all the positive integers which are less then or equal to the given number in question. For example *!4 = `1 * 2 * 3 * 4` = 24*. We can extract a rough formula for calculating the factorial like so: *!n = n * (n-1) * (n-2) * (n-3)...*

First, let's create a function that will calculate factorial for us with the help of a *for* loop.

```javascript
function facLoop(n) {
  let result = n;
  for (let i = 1; i < n; i++) {
    result *= i;
  };
  return result;
}
console.log(facLoop(4)) // 24
console.log(facLoop(5)) // 120
```
While looking at this simple algorithm it is worth noticing that we had to go out of our way to declare a helper variable *result* first. To get an idea about how many consecutive integers we will be working with, we need to declare yet another variable *i* inside the for loop which will be compared to the given argument *(i < n)*. Luckily, despite all the extra little steps we took, this little block of code is easy to follow and that partially comes from the fact that the task is simple. However it is easy to imagine how attempting to solve a more complex task, while using similar approach, would result in much more verbose code.

With this in mind, lets look at the next example; where the function itself is called recursively.
```javascript
function fac(n) {
  if (n === 1) return n;
  return n *= fac(n-1);
}
console.log(fac(4)) // 24
console.log(fac(5)) // 120
```
First thing to notice is how much simpler our algorithm is now. We are not creating any new procedures or data structures that have little to do with the input and the initial task (multiplying given integers). We are simply dealing with the input and producing the output. We provide a conditional statement called **base case** which controls the flow. Once the condition in the base case is met the recursion ends and we get the result. 

>the real reason why we should not try to think this way is because the program does not execute like that.

Why does this work? Our natural tendency is to try and work out the recursion in our head, as if it were a loop. This might as well be simple enough when trying to calculate a factorial of a small number but even slightly more complex operation could quickly make our head spin. The task at hand involves just a primitive procedure of multiplying, but what if we had a large input that requires rearranging of elements or sorting of some kind, and the body of our function required multiple primitive or compound procedures to produce our result? 

This is little beside the point because the real reason why we should not try to think this way is because the program does not execute like that. For example, the first time we invoke the function recursively inside off *fac(4)* 
```javascript
/*
fac(4)
  base case -> not met
  return n *= fac(4-1) // recursive call
```
we are not simply evaluating the value of *n* while assuming that *fac(4-1)* eqals *3* . *fac(4-1)* has no value because it returns none and, thus, the expected value is not available to us. 

Instead of iterating trough the initial call, we are allocating new space in memory and runnning *fac()* with a new argument. Namely, *4-1* in this case. The interpreter evaluates the operands 4-1 to be 3 but evaluating the operator *fac* does NOT produce (return) a value which can be multiplied with *n*. Instead, it leads us to another recursive call. *f(3-1*), in this case.

This continues until the arguments inside the recursive call evaluate and meet the base case inside the body of our function. In our case *n === 1*. 

This is when our function finally returns a value, in this case 1. And now the recursion magic sets in and each previous call recieves its necessary value and returns a corresponding value for the previous call.

Here is an attempt to trace calls and illustrate using some pseudo code.

```javascript
/*

fac(4)
  base case -> not met (4>1)
  returns n *= fac(4-1) 
  |             base case -> not met (3>1)
  |             returns n *= fac(3-1)
  |             |              base case -> not met (2>1)
  |             |              returns n *= fac(2-1)
  |             |              |              base case -> (1===1)
  |             |              |              returns 1
  |             |              |
  |             |              |---> evaluates fac(2 - 1) to 1. 
  |             |              |     returns 2 * 1 = 2
  |             |
  |             |---> evaluates fac(3 - 1) to 2. 
  |             |     returns 3 * 2 = 6
  |             
  |--> evaluates fac(4 - 1) to 6. 
  |    returns 3 * 6 = 24

*/
```
Hopefully the difference between iteration and recursion is little more evident in the example above. In stead of counting number *n* and with each count executing the procedure, recursion schedules execution in a separate instance for later time; after the base case is met.


