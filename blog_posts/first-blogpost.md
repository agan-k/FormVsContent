---
image: '/assets/reactJS.png'
title: "Interactive Image Gallery With React Modal"
date: "January 2021 by"
author: 'K. Agan'
---

When I first started out getting into [React](https://reactjs.org/) library (framework)
I already thought I had a decent sense for what DOM is. I could also write few lines of javascript
to manipulate the HTML in the DOM and then style it with some CSS and this is how I was able to build simple
websites. This is how one can build anything that a browser is capable of rendering, really. 
And the experienced ones, who could build anything this way, decided to take it a bit further by building 
frameworks and libraries in order to increase productivity and enhance performance. I finally arrived at the point
where I could no longer avoid dealing with these frameworks. I took a course in React, started building with this
new tool and never looked back.

However, my transition to React was not exactly smooth and, by sharing my experience here, I'm hoping to provide some insight into certain ways of thinking which might be helpful. 

## How to do stuff. h2

It is really easy to jump right into it and create a React app in the command line that will right out of the box do stuf for us. This is how I started off and it was somewhat counter productive. To be clear, this is not to say that getting your heands dirty with a new concept and figuring the parts out by yourself is not a valid way to approach things. On contrary, this is how I operate most of the time. However, I also noticed that, had I had some missing pieces of information beforehand, this process would have been much easier. So, jumping straight into the 'tutorial hell' (as one of my instructors called it) to obtain some arbitrary solution for our project, was not exactly the best way to do things in my own experience. Tutorials (even the mediocare ones) are a tremendous resource and absolutely essential for our ever changing ecosystem but a certain ballance in our approach needs to be struck so we can achive an optimal growth in our knowledge. 

So before going any further, here is a short (bare minimum) list which contain resouces that are very simple but essential to understanding how React works

- DOM (HTML)
- basic data types (javascript)
- conditionals (javascript)
- logical operators (javascript)
- loops (javascript)
- functions (javascript)



### This h3

p  

"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

<!-- <script src="https://gist.github.com/agan-k/ff3dd66c043385b4cb06d55cb26030a7.js">

</script> -->

```jsx
export default function BlogHome() {

   const router = useRouter()
   const linkData = [
      {link: 'posts/first-blogpost', name: 'first-blogpost'},
      {link: 'posts/second-blogpost', name: 'second-blogpost'}
   ]
   ```
   ```javascript
   const StackFilter = (arr, ...params) => {
      let match = [...params]
      let filteredArr = []
      for (let i = 0; i < arr.length; i++) {
         for (let j = 0; j < match.length; j++) {
            if (arr[i].name == match[j]) {
               filteredArr.push(arr[i])
            }
         }
      }
      return filteredArr
   }

   ```



Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."