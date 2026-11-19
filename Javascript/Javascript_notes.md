JavaScript (JS) is a programming language used to make websites interactive and dynamic.

* Real-time examples of JavaScript
1. YouTube
- Like and dislike videos
- Subscribe to channels
- Show comments dynamically
- Load more videos while scrolling
- Play, pause, and control videos

2. Amazon
- Add products to cart
- Update product quantity
- Calculate total price
- Display product image galleries
- Filter and sort products

3. Google Maps
- Interactive maps
- Zoom in and out
- Move around the map
- Display traffic information
- Update routes dynamically

4. . Instagram
- Like posts
- Comment on posts
- Scroll through feeds
- Open stories
- Display notifications

5. Netflix
- Play and pause movies
- Search for movies
- Display movie recommendations
- Navigate between categories
- Update the interface dynamically

chapter 1
variables and Data types

* console.log is used to print a message to consoloe 

Variables are Containers for data 

| Feature                          | `var`              | `let`                       | `const`                       |
| -------------------------------- | ------------------ | --------------------------- | ----------------------------- |
| **Introduced**                   | Older JavaScript   | ES6 (2015)                  | ES6 (2015)                    |
| **Scope**                        | Function scope     | Block scope                 | Block scope                   |
| **Reassignment**                 | ✅ Allowed          | ✅ Allowed                   | ❌ Not allowed                 |
| **Redeclaration**                | ✅ Allowed          | ❌ Not allowed in same scope | ❌ Not allowed in same scope   |
| **Must initialize immediately?** | ❌ No               | ❌ No                        | ✅ Yes                         |
| **Recommended usage**            | Avoid in modern JS | Use when value changes      | Use when value doesn't change |

| Feature         | `var`                      | `let`                         | `const`                       |
| --------------- | -------------------------- | ----------------------------- | ----------------------------- |
| **Declaration** | Variable can be redeclared | Variable cannot be redeclared | Variable cannot be redeclared |
| **Update**      | Variable can be updated    | Variable can be updated       | Variable cannot be updated    |
| **Scope**       | Global/Function scope      | Block scope                   | Block scope                   |

**Simple explanation:**

- `var` → Can be redeclared and updated.
- `let` → Cannot be redeclared, but can be updated.
- `const` → Cannot be redeclared or reassigned.

Note :- in let consider this example 
let a;
console.log(a); --> Here if I don't provide any value to 'a' then by default it return "undefined" value 

Here we have another concepts called "Block" . And Block means Curly braces--> { }
 ex:- {
    let a = 5;
    consoloe.log(a); 
    }
    and here we cannot re-define the same in let but the same name can be redefine in another block 
    {
        let a = 23;
        consoloe.log(a);
    }