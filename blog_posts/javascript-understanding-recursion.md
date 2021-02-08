---
image: '/assets/content/posts/recursion_article/javascript_square.png'
title: "Understanding the Recursion "
date: "Nov 2020 by"
author: 'K. Agan'
---

Here is another personal take on a subject I struggled with in the beginning until one of those 'Aha!' moments which give us the desire to keep tackling new challenges.

Recursion is a concept in which we can make a function call itself and by doing so produce an effect of a loop. Lets look at a classic example of writing a function to calculate the factorial of a given positive integer.

Quickly, the factorial of a given number represents a product of all the positive integers which are less or equal to the given number in question. For example <span class='command'>*!4 = `1*2*3*4` = 24*</span>. We can extract a rough formula for calculating the factorial like so: <span class='command'>*`!n = (n-1) * (n-2) * (n-3)...`*</span>

First, function using the for loop.
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
Finally, we multiply the value of ***result*** with each value that was extracted with the <span class='command'>for</span> loop.


Recursion.
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



<hr/>

<span class='command'></span>
<img class='markdown-img' src='' />
