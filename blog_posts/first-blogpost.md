---
image: '/assets/reactJS.png'
title: "Interactive Image Gallery With React Modal"
date: "January 2021 by"
author: 'K. Agan'
---



## How to do stuff. h2

- This and
- That
- Will be
- done

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