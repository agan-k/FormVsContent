---
image: '/assets/content/posts/recursion_article/javascript_square.png'
title: "Understanding the Recursion "
date: "Nov 2020 by"
author: 'K. Agan'
---

Here is another personal take on a subject I struggled with in the beginning until one of those great 'Aha!' moments which give us the desire to keep tackling new challenges.

Recursion is a concept in which we can make a function call itself and by doing so produce an effect of a loop. Lets look at a classic example of writing a function to calculate the factorial of a given positive integer.

Quickly, the <a href="https://en.wikipedia.org/wiki/Factorial" target="blank">factorial</a> of a given number represents a product of all the positive integers which are less then or equal to the given number in question. For example <span class='command'>*!4 = `1*2*3*4` = 24*</span>. We can extract a rough formula for calculating the factorial like so: <span class='command'>*`!n = (n-1) * (n-2) * (n-3)...`*</span>

First, let's create a function that will calculate factorial for us with the help of a <span class='command'>for</span> loop.
```javascript
function facLoop(n) {
  let result = n
  for (let i = 1; i < n; i++) {
    result *= i 
  }
  return result
}
console.log(facLoop(4)) // logs 24
```
This is a straight forward approach in which we declare a variable ***result*** and assign to it the value (given positive integer) of the argument <span class='command'>(n)</span>.  
Next, we use the <span class='command'>for</span> loop to extract all the values (positive integers) that are less than the value of the argument <span class='command'>(n)</span>.  
Then, we multiply the value of ***result*** with each value that was extracted with the <span class='command'>for</span> loop.
Finally, we <span class='command'>return</span> the value of the ***result***.

Before looking at the recursive method, let's focus on a couple of things which will help us in understanding the following example. First being that the <span class='command'>for</span> loop has a built in condition <span class='command'>i < n</span> which will cause for it to terminate. And second, while computations are recurring inside of the loop, no value is returned **until** the condition for termination is met and we can move on to the next line and <span class='command'>return</span> the value of the ***result***.

With this in mind, lets look at the <span class='command'>else</span> block; where the function itself is called recursively.
```javascript
function facRecursion(n) {
   if (n <= 0) {
    return 1
  } else {
    return fac(n - 1) * n
  }
}
console.log(facLoop(4)) // logs 24
```
First thing to notice is that, before we trigger the recursion <span class='command'>`fac(n-1) * n`</span>, we need to set the condition which will terminate it before it causes stack overflow. This part of the Recursive method is called the *base case* and this base case in particular returns value <span class='command'>1</span> once the argument <span class='command'>(n)</span> is less then or equal to <span class='command'>0</span>.

Secondly, let's look at the recursive line itself. This line does not produce (return) a value right away. In our particular example, (in pseudo code) it would look something like this:  
*(Each one of the new functions in pseudo code is just a rough representation of order in which the javascript engine would perform the computations, and the given values represent the value of 'n' as it changes in each new instance)*
```javascript
function facRecursion(4) {
   //condition to stop (0) and return value '1'
   facRec_A_(3) * 4 {

      facRec_B_(2) * 3 {

         facRec_C_(1) * 2 {

            facRec_D_(0) * 1 { //condition to stop (0) finally reached!
               return 1;
            }
         } 
      }
   }
}
```
Both, recursion and the <span class='command'>for</span> loop do not return any value until the condition for termination is met, BUT unlike the <span class='command'>for</span> loop, the recursion does not compute either, until the termination happens. Now, this is important. What happens after the above <span class='command'>`facRec_D_(0)`</span> produces a value (1) it causes a chain reaction in which each one of the other wrapped instances now receive a value and the recursion retreats while computing the final returned value.
```javascript
function facRecursion(4) {
   //condition to stop (0) and return value '1'
   facRec_A_(3) * 4 {

      facRec_B_(2) * 3 {

         facRec_C_(1) * 2 {

            facRec_D_(0) * 1 { //condition to stop (0) finally reached!
               return 1;
            //returns the value of 1 and now we can compute: 1 * 1 = 1
            }
         //now starts with the value of 1 and the function computes: 1 * 2 = 2
         } 
      //now starts with the value of 2 and the function computes: 2 * 3 = 6
      }
   //now starts with the value of 6 and the function computes: 6 * 4 = 24
   }
}
```
<!-- 
```javascript
facRec_D_(0) * 1 { //condition to stop(0) finally reached!
   return 1; // facRec_D_(0) returns value of 1 and now we can compute: 1 * 1 = 1
}
facRec_D_(1) * 2 { // facRec_C_(1) now starts with value of 1 (returned by facRec_D_(0)) and now we can compute: 1 * 2 = 2
   return 2
}
facRec_B_(2) * 3 { // facRec_B_(2) now starts with value of 2 and now we can compute: 2 * 3 = 6
   return 6
}
facRec_A_(3) * 4 { // facRec_B_(3) now starts with value of 6 and now we can compute: 6 * 4 = 24

   return 24 // this is the final result value!
}

``` -->

And so, the function with its original arguments returns a value. There is always just a single function which we made into an infinite loop by calling it inside it's own body. But we also altered the arguments and set the conditions in such way that it had to duplicate itself exactly the right number of times we needed. Then, we gave it (returned) a value with our base case so each of the function duplicates can compute and return the appropriate value.

## The "Aha!" ##

Looking at the recursive function and trying to 'get it', the way it is possible to understand something like the <span class='command'>for</span> loop, is difficult without being familiar enough with the inner workings of the javascript engine. In particular, it is necessary to understand how function execution works in javascript and have some basic idea about the javascript Call Stack. I found myself struggling and disappointed, thinking that I just wasn't able to understand some advanced logic. I would try to picture in my head how the machine goes trough the program but in reality I was simply missing some important pieces of the puzzle.

**Read a good <a href="https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/" target="blank">good article</a> about the javascript Call Stack. More about functions <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" target="blank">here</a>**.

## `tl;dr` ##

Main thing to get out of the resources above is that the call stack operates by the principle of last in, first out (LIFO). Which means that the last function that gets into the stack is the first one that comes out. 

We can demonstrate this better with a function in which we try to calculate a range of numbers.
```javascript
function rangeOfNumbers(startNum, endNum) {
   if (startNum > endNum) {
      return []
   } else {
      const range = rangeOfNumbers(startNum, endNum - 1)
      range.push(endNum)
      return range
   }
}
console.log(rangeOfNumbers(3, 10))// logs [3,4,5,6,7,8,9,10]
```
In this example we create a base case in which we set a condition that will return an empty array. 
Next, we set the recursion off and assign its value to the variable ***range***. However, the value will not be assigned until the condition is met.
Once we meet the condition, ***range*** receives a value of an empty array and is finally able to <span class='command'>.push()</span> the corresponding value of <span class='command'>(endNum)</span>. In this case 3. 
This was the last instance (recursion) of the <span class='command'>function rangeOfNumbers()</span> that got into the stack and first one that gets out. The fact that the first element of the array ***range*** is 3, confirms this.

<hr/>
<p class='signature'>K.Agan - Dec '20, Brooklyn NY</p>


