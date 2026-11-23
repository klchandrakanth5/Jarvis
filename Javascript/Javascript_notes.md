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

Strings
A string is sequence of Character enclosed in single or double qoutes

Built - in Methods in Strings
# **JavaScript String Methods – Complete Categorized List**

JavaScript provides several built-in string methods for performing operations such as searching, extracting, modifying, comparing, and formatting strings.

I have categorized them based on their **importance and practical usage**, so you can prepare your notes systematically.

## **1. General String Methods**

These are the basic methods and properties used frequently while working with strings.

| Method / Property | Description                                     |
| ----------------- | ----------------------------------------------- |
| `length`          | Returns the number of characters in a string.   |
| `toUpperCase()`   | Converts a string into uppercase.               |
| `toLowerCase()`   | Converts a string into lowercase.               |
| `toString()`      | Returns the string representation of a value.   |
| `valueOf()`       | Returns the primitive value of a String object. |
| `concat()`        | Combines two or more strings.                   |

## **2. Important String Methods for Interviews**

These methods are commonly asked in coding interviews and are important for problem-solving.

| Method          | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| `slice()`       | Extracts a portion of a string.                                       |
| `substring()`   | Extracts characters between two indexes.                              |
| `charAt()`      | Returns the character at a specified index.                           |
| `at()`          | Returns a character at a specified index, including negative indexes. |
| `indexOf()`     | Returns the index of the first occurrence of a specified value.       |
| `lastIndexOf()` | Returns the index of the last occurrence of a specified value.        |
| `includes()`    | Checks whether a string contains a specified value.                   |
| `startsWith()`  | Checks whether a string starts with a specified value.                |
| `endsWith()`    | Checks whether a string ends with a specified value.                  |
| `replace()`     | Replaces the first matching value.                                    |
| `replaceAll()`  | Replaces all matching values.                                         |
| `split()`       | Splits a string into an array.                                        |
| `repeat()`      | Repeats a string a specified number of times.                         |

## **3. String Trimming Methods**

These methods are used to remove unnecessary whitespace from strings.

| Method        | Description                                        |
| ------------- | -------------------------------------------------- |
| `trim()`      | Removes whitespace from both ends of a string.     |
| `trimStart()` | Removes whitespace from the beginning of a string. |
| `trimEnd()`   | Removes whitespace from the end of a string.       |

### **Example**

```
let name = "  Ram  ";

console.log(name.trim());      // "Ram"
console.log(name.trimStart()); // "Ram  "
console.log(name.trimEnd());   // "  Ram"
```

## **4. String Searching Methods**

These methods are used to search for specific characters, words, or patterns within a string.

| Method          | Description                                            |
| --------------- | ------------------------------------------------------ |
| `includes()`    | Checks whether a string contains a specified value.    |
| `indexOf()`     | Returns the index of the first occurrence of a value.  |
| `lastIndexOf()` | Returns the index of the last occurrence of a value.   |
| `startsWith()`  | Checks whether a string starts with a specified value. |
| `endsWith()`    | Checks whether a string ends with a specified value.   |
| `search()`      | Searches for a match using a regular expression.       |

## **5. String Extraction Methods**

These methods are used to extract characters or portions of a string.

| Method          | Description                                                               |
| --------------- | ------------------------------------------------------------------------- |
| `slice()`       | Extracts a portion of a string.                                           |
| `substring()`   | Extracts characters between two indexes.                                  |
| `charAt()`      | Returns the character at a specified index.                               |
| `at()`          | Returns the character at a specified index and supports negative indexes. |
| `charCodeAt()`  | Returns the UTF-16 code of a character.                                   |
| `codePointAt()` | Returns the Unicode code point of a character.                            |

## **6. String Modification Methods**

These methods are used to modify or manipulate strings by returning a new string.

| Method         | Description                                   |
| -------------- | --------------------------------------------- |
| `replace()`    | Replaces the first matching value.            |
| `replaceAll()` | Replaces all matching values.                 |
| `concat()`     | Combines strings.                             |
| `repeat()`     | Repeats a string a specified number of times. |
| `padStart()`   | Adds characters to the beginning of a string. |
| `padEnd()`     | Adds characters to the end of a string.       |

## **7. Regular Expression Methods**

These methods are used to search, match, and replace text using patterns.

| Method         | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `match()`      | Returns matches of a regular expression in a string.                |
| `matchAll()`   | Returns an iterator containing all matches of a regular expression. |
| `search()`     | Returns the index of the first match of a regular expression.       |
| `replace()`    | Replaces matching content.                                          |
| `replaceAll()` | Replaces all matching content.                                      |

## **8. String Comparison Methods**

| Method            | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `localeCompare()` | Compares two strings according to locale-specific rules. |

### **Example**

```
console.log("Apple".localeCompare("Banana"));
```

## **9. Internationalization Methods**

These methods are useful when working with strings across different languages and locales.

| Method                | Description                                                        |
| --------------------- | ------------------------------------------------------------------ |
| `toLocaleUpperCase()` | Converts a string to uppercase according to locale-specific rules. |
| `toLocaleLowerCase()` | Converts a string to lowercase according to locale-specific rules. |
| `localeCompare()`     | Compares strings according to locale-specific rules.               |

## **10. Static String Methods**

These methods are called directly using the `String` constructor.

| Method                   | Description                                   |
| ------------------------ | --------------------------------------------- |
| `String.fromCharCode()`  | Creates a string from UTF-16 character codes. |
| `String.fromCodePoint()` | Creates a string from Unicode code points.    |
| `String.raw()`           | Returns a raw string from a template literal. |

### **Examples**

```
console.log(String.fromCharCode(65)); 
// A

console.log(String.fromCodePoint(128512)); 
// 😀

console.log(String.raw`Hello\nWorld`);
// Hello\nWorld
```

## **11. Legacy / Deprecated String Methods**

These methods exist in JavaScript for backward compatibility, but they are **not recommended for modern development**.

| Method        | Description                                   |
| ------------- | --------------------------------------------- |
| `anchor()`    | Creates an HTML anchor element string.        |
| `big()`       | Creates a string with a big HTML font tag.    |
| `blink()`     | Creates a string with a blink HTML tag.       |
| `bold()`      | Creates a string with a bold HTML tag.        |
| `fixed()`     | Creates a string with a fixed-width HTML tag. |
| `fontcolor()` | Creates a string with a font color HTML tag.  |
| `fontsize()`  | Creates a string with a font size HTML tag.   |
| `italics()`   | Creates a string with an italic HTML tag.     |
| `link()`      | Creates a string with an HTML link tag.       |
| `small()`     | Creates a string with a small HTML tag.       |
| `strike()`    | Creates a string with a strike HTML tag.      |
| `sub()`       | Creates a string with a subscript HTML tag.   |
| `sup()`       | Creates a string with a superscript HTML tag. |

# **Final Categorized List for Your Notes**

| Category                         | Methods / Properties                                                                                                                             |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **General Methods**              | `length`, `toUpperCase()`, `toLowerCase()`, `toString()`, `valueOf()`, `concat()`                                                                |
| **Important Interview Methods**  | `slice()`, `substring()`, `charAt()`, `at()`, `indexOf()`, `lastIndexOf()`, `includes()`, `replace()`, `replaceAll()`, `split()`                 |
| **Searching Methods**            | `includes()`, `indexOf()`, `lastIndexOf()`, `startsWith()`, `endsWith()`, `search()`                                                             |
| **Extraction Methods**           | `slice()`, `substring()`, `charAt()`, `at()`, `charCodeAt()`, `codePointAt()`                                                                    |
| **Trimming Methods**             | `trim()`, `trimStart()`, `trimEnd()`                                                                                                             |
| **Modification Methods**         | `replace()`, `replaceAll()`, `concat()`, `repeat()`, `padStart()`, `padEnd()`                                                                    |
| **Regular Expression Methods**   | `match()`, `matchAll()`, `search()`, `replace()`, `replaceAll()`                                                                                 |
| **Comparison Methods**           | `localeCompare()`                                                                                                                                |
| **Internationalization Methods** | `toLocaleUpperCase()`, `toLocaleLowerCase()`, `localeCompare()`                                                                                  |
| **Static Methods**               | `String.fromCharCode()`, `String.fromCodePoint()`, `String.raw()`                                                                                |
| **Legacy Methods**               | `anchor()`, `big()`, `blink()`, `bold()`, `fixed()`, `fontcolor()`, `fontsize()`, `italics()`, `link()`, `small()`, `strike()`, `sub()`, `sup()` |

## **My Recommendation for Your JavaScript Notes**

You don't need to memorize every method immediately. Focus on these **20 important methods and properties first**:

```
length
toUpperCase()
toLowerCase()
trim()
trimStart()
trimEnd()
includes()
indexOf()
lastIndexOf()
startsWith()
endsWith()
slice()
substring()
charAt()
at()
replace()
replaceAll()
split()
concat()
repeat()
```

After mastering these, learn:

```
search()
match()
matchAll()
padStart()
padEnd()
charCodeAt()
codePointAt()
localeCompare()
toLocaleUpperCase()
toLocaleLowerCase()
```

**Important:** JavaScript strings are immutable. String methods generally return a new string rather than modifying the original string.

          Arrays in JS
An array is a collections of items
# **JavaScript Arrays — Complete Guide**

Let's learn **Arrays in JavaScript from beginner to advanced**, step by step, with real-world examples, simple explanations, syntax, and practice.

Think of me as your JavaScript mentor. The goal is not just to memorize array methods but to understand **why arrays exist, when to use them, and how they work in real applications**.

# **1. What is an Array?**

An **array is a data structure used to store multiple values inside a single variable**.

Without arrays, if you wanted to store 5 student names, you would need 5 variables:

```
let student1 = "Ram";
let student2 = "Shyam";
let student3 = "Ravi";
let student4 = "Kiran";
let student5 = "Arun";
```

This becomes difficult when you have 100 or 1,000 students.

Instead, you can use an array:

```
let students = ["Ram", "Shyam", "Ravi", "Kiran", "Arun"];
```

Now all student names are stored inside one variable.

**Real-world example:**

Imagine a classroom. Instead of keeping every student's name separately, you maintain one student list.

```
let students = ["Ram", "Shyam", "Ravi", "Kiran"];
```

The array represents the entire list of students.

# **2. Array Syntax**

```
let arrayName = [value1, value2, value3, value4];
```

Example:

```
let fruits = ["Apple", "Banana", "Mango", "Orange"];
```

An array can contain different data types:

```
let data = ["Ram", 25, true, 100.5];
```

JavaScript arrays can contain:

- Strings
- Numbers
- Booleans
- Objects
- Other arrays
- Functions
- `null`
- `undefined`

Example:

```
let data = [
    "Ram",
    25,
    true,
    null,
    { city: "Bangalore" },
    [10, 20, 30]
];
```

However, in real applications, it is generally better to keep arrays logically organized.

For example:

```
let studentNames = ["Ram", "Shyam", "Ravi"];
```

is better than:

```
let studentData = ["Ram", 25, true, "Bangalore", 95];
```

unless the values represent a specific structured record.

# **3. Why Do We Use Arrays?**

Arrays are useful when you have multiple related values.

### **Example 1: Student names**

```
let students = ["Ram", "Shyam", "Ravi"];
```

### **Example 2: Product prices**

```
let prices = [100, 250, 500, 750];
```

### **Example 3: Employee salaries**

```
let salaries = [25000, 30000, 45000, 60000];
```

### **Example 4: Shopping cart**

```
let cart = ["Laptop", "Mouse", "Keyboard"];
```

### **Example 5: User notifications**

```
let notifications = [
    "New message",
    "Your order has been shipped",
    "Payment successful"
];
```

# **4. Array Index**

Every element inside an array has an **index**.

The index tells us the position of an element.

**JavaScript arrays start from index&#x20;**`0`**.**

```
let fruits = ["Apple", "Banana", "Mango", "Orange"];
```

## **0**

Apple

## **1**

Banana

## **2**

Mango

## **3**

Orange

| Element | Index |
| ------- | ----- |
| Apple   | 0     |
| Banana  | 1     |
| Mango   | 2     |
| Orange  | 3     |

### **Accessing an array element**

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango
```

### **Important**

```
console.log(fruits[3]);
```

Output:

```
undefined
```

Why?

Because index `3` does not exist in this array.

# **5. Array Length**

The `length` property tells you how many elements are present in an array.

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);
```

Output:

```
3
```

### **Important difference**

| Property | Meaning                  |
| -------- | ------------------------ |
| Index    | Position of an element   |
| Length   | Total number of elements |

Example:

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length); // 3
console.log(fruits[2]);    // Mango
```

Remember:

```
lastIndex = array.length - 1;
```

For example:

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[fruits.length - 1]);
```

Output:

```
Mango
```

# **6. Changing Array Elements**

Arrays are mutable, meaning their contents can be changed.

```
let fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";

console.log(fruits);
```

Output:

```
["Apple", "Orange", "Mango"]
```

We changed the value at index `1`.

### **Real-world example**

Imagine a user changes their shopping cart product.

```
let cart = ["Laptop", "Mouse", "Keyboard"];

cart[1] = "Wireless Mouse";

console.log(cart);
```

# **7. Adding Elements to an Array**

There are multiple ways to add elements.

## **7.1&#x20;**`push()`

Adds an element to the **end** of an array.

```
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
```

Output:

```
["Apple", "Banana", "Mango"]
```

You can add multiple elements:

```
fruits.push("Orange", "Grapes");
```

### **Real-world example**

A user adds a product to their shopping cart.

```
let cart = ["Laptop", "Mouse"];

cart.push("Keyboard");

console.log(cart);
```

## **7.2&#x20;**`unshift()`

Adds an element to the **beginning** of an array.

```
let fruits = ["Banana", "Mango"];

fruits.unshift("Apple");

console.log(fruits);
```

Output:

```
["Apple", "Banana", "Mango"]
```

### **Real-world example**

Adding a new notification at the beginning of the notification list.

```
let notifications = [
    "Your order has been shipped",
    "Payment successful"
];

notifications.unshift("New message received");

console.log(notifications);
```

# **8. Removing Elements from an Array**

## **8.1&#x20;**`pop()`

Removes the **last element**.

```
let fruits = ["Apple", "Banana", "Mango"];

fruits.pop();

console.log(fruits);
```

Output:

```
["Apple", "Banana"]
```

## **8.2&#x20;**`shift()`

Removes the **first element**.

```
let fruits = ["Apple", "Banana", "Mango"];

fruits.shift();

console.log(fruits);
```

Output:

```
["Banana", "Mango"]
```

# **9.&#x20;**`push()`**,&#x20;**`pop()`**,&#x20;**`shift()`**&#x20;and&#x20;**`unshift()`

| Method      | Purpose        | Position  |
| ----------- | -------------- | --------- |
| `push()`    | Add element    | End       |
| `pop()`     | Remove element | End       |
| `unshift()` | Add element    | Beginning |
| `shift()`   | Remove element | Beginning |

## **Visual Example**

Original array:

**A**

**B**

**C**

push("D") → Adds to the end

**A**

**B**

**C**

**D**

pop() → Removes from the end

**A**

**B**

# **10. Looping Through Arrays**

This is one of the **most important concepts in JavaScript arrays**.

Suppose you have:

```
let students = ["Ram", "Shyam", "Ravi", "Kiran"];
```

You want to print every student.

Instead of writing:

```
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
```

You can use loops.

## **10.1&#x20;**`for`**&#x20;Loop**

```
let students = ["Ram", "Shyam", "Ravi", "Kiran"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
```

Output:

```
Ram
Shyam
Ravi
Kiran
```

### **How it works**

```
for (let i = 0; i < students.length; i++)
```

| Part                  | Purpose                                        |
| --------------------- | ---------------------------------------------- |
| `let i = 0`           | Start from index 0                             |
| `i < students.length` | Continue while index is less than array length |
| `i++`                 | Increase index by 1                            |

### **Execution**

| Iteration | `i` | `students[i]` |
| --------- | --- | ------------- |
| 1         | 0   | Ram           |
| 2         | 1   | Shyam         |
| 3         | 2   | Ravi          |
| 4         | 3   | Kiran         |

## **10.2&#x20;**`for...of`

This is a cleaner way to loop through array values.

```
let students = ["Ram", "Shyam", "Ravi"];

for (let student of students) {
    console.log(student);
}
```

Output:

```
Ram
Shyam
Ravi
```

### **Difference**

```
for (let i = 0; i < students.length; i++)
```

You work with the index.

```
for (let student of students)
```

You directly work with the value.

## **10.3&#x20;**`forEach()`

`forEach()` executes a function for every array element.

```
let students = ["Ram", "Shyam", "Ravi"];

students.forEach(function(student) {
    console.log(student);
});
```

Using arrow functions:

```
students.forEach(student => {
    console.log(student);
});
```

### **Example with index**

```
students.forEach((student, index) => {
    console.log(index, student);
});
```

Output:

```
0 Ram
1 Shyam
2 Ravi
```

# **11. Searching in Arrays**

## **11.1&#x20;**`includes()`

Checks whether a value exists in the array.

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Banana"));
```

Output:

```
true
```

```
console.log(fruits.includes("Orange"));
```

Output:

```
false
```

### **Real-world example**

Checking whether a product is available in a shopping cart.

```
let cart = ["Laptop", "Mouse", "Keyboard"];

if (cart.includes("Laptop")) {
    console.log("Laptop is present in the cart");
}
```

## **11.2&#x20;**`indexOf()`

Returns the index of a value.

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.indexOf("Banana"));
```

Output:

```
1
```

If the value doesn't exist:

```
console.log(fruits.indexOf("Orange"));
```

Output:

```
-1
```

### **Why&#x20;**`-1`**?**

It means the value was not found.

# **12.&#x20;**`find()`

`find()` returns the **first element that satisfies a condition**.

Example:

```
let numbers = [10, 20, 30, 40, 50];

let result = numbers.find(number => number > 25);

console.log(result);
```

Output:

```
30
```

Why?

JavaScript checks:

```
10 > 25 ❌
20 > 25 ❌
30 > 25 ✅
```

It returns `30` and stops searching.

### **Real-world example**

Finding a particular user.

```
let users = [
    { id: 1, name: "Ram" },
    { id: 2, name: "Shyam" },
    { id: 3, name: "Ravi" }
];

let user = users.find(user => user.id === 2);

console.log(user);
```

Output:

```
{ id: 2, name: "Shyam" }
```

# **13.&#x20;**`filter()`

`filter()` returns **all elements that satisfy a condition**.

```
let numbers = [10, 20, 30, 40, 50];

let result = numbers.filter(number => number > 25);

console.log(result);
```

Output:

```
[30, 40, 50]
```

### **Difference between&#x20;**`find()`**&#x20;and&#x20;**`filter()`

| `find()`                        | `filter()`                    |
| ------------------------------- | ----------------------------- |
| Returns first matching element  | Returns all matching elements |
| Returns a single value          | Returns a new array           |
| Stops after finding first match | Checks all elements           |

### **Real-world example**

Finding all products whose price is greater than ₹500.

```
let products = [
    { name: "Mouse", price: 300 },
    { name: "Keyboard", price: 800 },
    { name: "Monitor", price: 5000 }
];

let expensiveProducts = products.filter(product => product.price > 500);

console.log(expensiveProducts);
```

# **14.&#x20;**`map()`

`map()` is used to **transform every element of an array and return a new array**.

Example:

```
let numbers = [1, 2, 3, 4];

let result = numbers.map(number => number * 2);

console.log(result);
```

Output:

```
[2, 4, 6, 8]
```

### **How it works**

| Original | Transformation | Result |
| -------- | -------------- | ------ |
| 1        | 1 × 2          | 2      |
| 2        | 2 × 2          | 4      |
| 3        | 3 × 2          | 6      |
| 4        | 4 × 2          | 8      |

### **Real-world example**

Applying a 10% discount to every product.

```
let prices = [1000, 2000, 3000];

let discountedPrices = prices.map(price => price * 0.9);

console.log(discountedPrices);
```

Output:

```
[900, 1800, 2700]
```

# **15.&#x20;**`reduce()`

`reduce()` is used to **combine array elements into a single value**.

For example, calculating the total price.

```
let prices = [100, 200, 300, 400];

let total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total);
```

Output:

```
1000
```

### **Understanding&#x20;**`reduce()`

```
array.reduce(callback, initialValue);
```

| Parameter | Meaning         |
| --------- | --------------- |
| `sum`     | Accumulator     |
| `price`   | Current element |
| `0`       | Initial value   |

### **Execution**

| Current Price | Previous Sum | New Sum |
| ------------- | ------------ | ------- |
| 100           | 0            | 100     |
| 200           | 100          | 300     |
| 300           | 300          | 600     |
| 400           | 600          | 1000    |

### **Real-world example**

Calculating total shopping cart value.

```
let cart = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];

let totalPrice = cart.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log(totalPrice);
```

Output:

```
52000
```

# **16.&#x20;**`slice()`

`slice()` is used to **extract a portion of an array**.

It does not modify the original array.

### **Syntax**

```
array.slice(start, end);
```

- `start` → starting index
- `end` → ending index (not included)

### **Example**

```
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

let result = fruits.slice(1, 4);

console.log(result);
```

Output:

```
["Banana", "Mango", "Orange"]
```

Why?

| Index | Value  | Selected? |
| ----- | ------ | --------- |
| 0     | Apple  | ❌         |
| 1     | Banana | ✅         |
| 2     | Mango  | ✅         |
| 3     | Orange | ✅         |
| 4     | Grapes | ❌         |

The ending index `4` is excluded.

### `slice()`**&#x20;without an ending index**

```
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let result = fruits.slice(2);

console.log(result);
```

Output:

```
["Mango", "Orange"]
```

### **Negative indexes**

```
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.slice(-2));
```

Output:

```
["Mango", "Orange"]
```

# **17.&#x20;**`splice()`

`splice()` is used to:

1. Add elements
2. Remove elements
3. Replace elements

Unlike `slice()`, `splice()`**&#x20;modifies the original array**.

### **Syntax**

```
array.splice(start, deleteCount, item1, item2);
```

## **17.1 Removing Elements**

```
let fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.splice(1, 2);

console.log(fruits);
```

Output:

```
["Apple", "Orange"]
```

Explanation:

```
fruits.splice(1, 2);
```

- Start at index `1`
- Remove `2` elements

Removed:

```
["Banana", "Mango"]
```

## **17.2 Adding Elements**

```
let fruits = ["Apple", "Mango"];

fruits.splice(1, 0, "Banana");

console.log(fruits);
```

Output:

```
["Apple", "Banana", "Mango"]
```

Explanation:

```
fruits.splice(1, 0, "Banana");
```

- Start at index `1`
- Remove `0` elements
- Insert `"Banana"`

## **17.3 Replacing Elements**

```
let fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1, "Orange");

console.log(fruits);
```

Output:

```
["Apple", "Orange", "Mango"]
```

Explanation:

- Start at index `1`
- Remove one element
- Insert `"Orange"`

# **18.&#x20;**`slice()`**&#x20;vs&#x20;**`splice()`

This is a very important interview question.

| Feature                 | `slice()`        | `splice()`                  |
| ----------------------- | ---------------- | --------------------------- |
| Purpose                 | Extract elements | Add/remove/replace elements |
| Modifies original array | ❌ No             | ✅ Yes                       |
| Returns                 | New array        | Removed elements            |
| Parameters              | Start, end       | Start, delete count, items  |

### **Example**

```
let numbers = [10, 20, 30, 40, 50];

let result = numbers.slice(1, 3);

console.log(result);
console.log(numbers);
```

Output:

```
[20, 30]
[10, 20, 30, 40, 50]
```

Original array remains unchanged.

Now:

```
let numbers = [10, 20, 30, 40, 50];

let result = numbers.splice(1, 2);

console.log(result);
console.log(numbers);
```

Output:

```
[20, 30]
[10, 40, 50]
```

Original array changed.

# **19.&#x20;**`concat()`

`concat()` combines two or more arrays.

```
let array1 = [10, 20, 30];
let array2 = [40, 50, 60];

let result = array1.concat(array2);

console.log(result);
```

Output:

```
[10, 20, 30, 40, 50, 60]
```

Original arrays remain unchanged.

You can combine multiple arrays:

```
let array1 = [1, 2];
let array2 = [3, 4];
let array3 = [5, 6];

let result = array1.concat(array2, array3);

console.log(result);
```

# **20. Spread Operator&#x20;**`...`

The spread operator expands elements from an array.

### **Example**

```
let numbers = [10, 20, 30];

console.log(...numbers);
```

Output:

```
10 20 30
```

## **20.1 Combining Arrays**

```
let array1 = [10, 20];
let array2 = [30, 40];

let result = [...array1, ...array2];

console.log(result);
```

Output:

```
[10, 20, 30, 40]
```

## **20.2 Adding Elements**

```
let fruits = ["Apple", "Banana"];

let newFruits = [...fruits, "Mango"];

console.log(newFruits);
```

Output:

```
["Apple", "Banana", "Mango"]
```

The original array remains unchanged.

## **20.3 Copying an Array**

```
let original = [10, 20, 30];

let copy = [...original];

console.log(copy);
```

This creates a **shallow copy** of the array.

Important:

```
let original = [10, 20, 30];
let copy = original;
```

This does **not** create a separate array.

Both variables reference the same array.

```
copy.push(40);

console.log(original);
```

Output:

```
[10, 20, 30, 40]
```

But:

```
let original = [10, 20, 30];
let copy = [...original];

copy.push(40);

console.log(original);
```

Output:

```
[10, 20, 30]
```

# **21.&#x20;**`sort()`

`sort()` is used to sort array elements.

### **Sorting strings**

```
let fruits = ["Mango", "Apple", "Banana", "Orange"];

fruits.sort();

console.log(fruits);
```

Output:

```
["Apple", "Banana", "Mango", "Orange"]
```

## **Sorting Numbers**

Be careful!

```
let numbers = [10, 5, 100, 25, 2];

numbers.sort();

console.log(numbers);
```

Unexpected output:

```
[10, 100, 2, 25, 5]
```

Why?

By default, `sort()` converts elements into strings and sorts them alphabetically based on their string representation.

### **Correct numerical sorting**

Ascending order:

```
let numbers = [10, 5, 100, 25, 2];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Output:

```
[2, 5, 10, 25, 100]
```

Descending order:

```
let numbers = [10, 5, 100, 25, 2];

numbers.sort((a, b) => b - a);

console.log(numbers);
```

Output:

```
[100, 25, 10, 5, 2]
```

### **Understanding the callback**

```
(a, b) => a - b
```

| Result   | Meaning                               |
| -------- | ------------------------------------- |
| Negative | `a` comes before `b`                  |
| Positive | `a` comes after `b`                   |
| Zero     | Their positions are equal for sorting |

# **22.&#x20;**`reverse()`

Reverses the order of array elements.

```
let numbers = [10, 20, 30, 40];

numbers.reverse();

console.log(numbers);
```

Output:

```
[40, 30, 20, 10]
```

Important: `reverse()` modifies the original array.

# **23.&#x20;**`join()`

`join()` converts an array into a string.

```
let fruits = ["Apple", "Banana", "Mango"];

let result = fruits.join();

console.log(result);
```

Output:

```
Apple,Banana,Mango
```

You can specify a separator.

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join(" "));
```

Output:

```
Apple Banana Mango
```

```
console.log(fruits.join("-"));
```

Output:

```
Apple-Banana-Mango
```

```
console.log(fruits.join(" | "));
```

Output:

```
Apple | Banana | Mango
```

### **Real-world example**

```
let skills = ["Python", "Django", "SQL", "JavaScript"];

let result = skills.join(", ");

console.log(result);
```

Output:

```
Python, Django, SQL, JavaScript
```

# **24.&#x20;**`Array.isArray()`

Used to check whether a value is an array.

```
let fruits = ["Apple", "Banana"];

console.log(Array.isArray(fruits));
```

Output:

```
true
```

Example:

```
let name = "Ram";
let age = 25;

console.log(Array.isArray(name)); // false
console.log(Array.isArray(age));  // false
```

### **Why is this important?**

In JavaScript:

```
typeof [];
```

Output:

```
"object"
```

So `typeof` cannot correctly identify arrays.

Use:

```
Array.isArray(value);
```

# **25.&#x20;**`some()`

`some()` checks whether **at least one element** satisfies a condition.

It returns:

- `true` if at least one element satisfies the condition
- `false` if none of the elements satisfy the condition

### **Example**

```
let numbers = [10, 20, 30, 40];

let result = numbers.some(number => number > 25);

console.log(result);
```

Output:

```
true
```

Why?

Because `30` and `40` are greater than `25`.

### **Example**

```
let numbers = [10, 20, 30];

console.log(numbers.some(number => number > 100));
```

Output:

```
false
```

### **Real-world example**

Checking whether a shopping cart contains at least one expensive product.

```
let prices = [100, 200, 5000, 300];

let result = prices.some(price => price > 1000);

console.log(result);
```

Output:

```
true
```

# **26.&#x20;**`every()`

`every()` checks whether **all elements** satisfy a condition.

```
let numbers = [10, 20, 30, 40];

let result = numbers.every(number => number > 5);

console.log(result);
```

Output:

```
true
```

All numbers are greater than `5`.

Now:

```
let numbers = [10, 20, 30, 40];

let result = numbers.every(number => number > 25);

console.log(result);
```

Output:

```
false
```

Because `10` and `20` are not greater than `25`.

### `some()`**&#x20;vs&#x20;**`every()`

| Method    | Meaning                                      |
| --------- | -------------------------------------------- |
| `some()`  | At least one element satisfies the condition |
| `every()` | All elements satisfy the condition           |

# **27.&#x20;**`at()`

`at()` accesses an element using an index.

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.at(0));
```

Output:

```
Apple
```

### **Negative indexes**

One useful feature of `at()` is that it supports negative indexes.

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.at(-1));
```

Output:

```
Mango
```

```
console.log(fruits.at(-2));
```

Output:

```
Banana
```

This makes it easier to access elements from the end.

# **28.&#x20;**`flat()`

`flat()` is used to convert a nested array into a less deeply nested array.

### **Example**

```
let numbers = [1, 2, [3, 4], [5, 6]];

let result = numbers.flat();

console.log(result);
```

Output:

```
[1, 2, 3, 4, 5, 6]
```

### **Nested arrays**

```
let numbers = [1, [2, [3, [4]]]];

console.log(numbers.flat());
```

Output:

```
[1, 2, [3, [4]]]
```

By default, `flat()` only removes one level.

### **Flattening multiple levels**

```
let numbers = [1, [2, [3, [4]]]];

let result = numbers.flat(2);

console.log(result);
```

Output:

```
[1, 2, 3, [4]]
```

### **Flattening completely**

```
let numbers = [1, [2, [3, [4]]]];

let result = numbers.flat(Infinity);

console.log(result);
```

Output:

```
[1, 2, 3, 4]
```

# **29.&#x20;**`flatMap()`

`flatMap()` combines two operations:

1. `map()`
2. `flat()`

### **Example**

```
let numbers = [1, 2, 3];

let result = numbers.flatMap(number => [number, number * 2]);

console.log(result);
```

Output:

```
[1, 2, 2, 4, 3, 6]
```

### **Without&#x20;**`flatMap()`

```
let numbers = [1, 2, 3];

let result = numbers.map(number => [number, number * 2]);

console.log(result);
```

Output:

```
[[1, 2], [2, 4], [3, 6]]
```

### **With&#x20;**`flatMap()`

```
let result = numbers.flatMap(number => [number, number * 2]);

console.log(result);
```

Output:

```
[1, 2, 2, 4, 3, 6]
```

# **30.&#x20;**`fill()`

`fill()` fills an array with a specified value.

```
let numbers = [1, 2, 3, 4, 5];

numbers.fill(0);

console.log(numbers);
```

Output:

```
[0, 0, 0, 0, 0]
```

### **Filling specific positions**

```
let numbers = [1, 2, 3, 4, 5];

numbers.fill(0, 1, 3);

console.log(numbers);
```

Output:

```
[1, 0, 0, 4, 5]
```

Syntax:

```
array.fill(value, start, end);
```

# **31.&#x20;**`Array.from()`

`Array.from()` creates an array from an iterable or array-like object.

### **Example**

```
let name = "Ram";

let result = Array.from(name);

console.log(result);
```

Output:

```
["R", "a", "m"]
```

### **Creating an array from a range**

```
let numbers = Array.from({ length: 5 }, (_, index) => index + 1);

console.log(numbers);
```

Output:

```
[1, 2, 3, 4, 5]
```

### **Understanding this code**

```
Array.from({ length: 5 }, (_, index) => index + 1);
```

| Index | Returned Value |
| ----- | -------------- |
| 0     | 1              |
| 1     | 2              |
| 2     | 3              |
| 3     | 4              |
| 4     | 5              |

# **32.&#x20;**`Array.of()`

Creates an array from the provided arguments.

```
let numbers = Array.of(10, 20, 30);

console.log(numbers);
```

Output:

```
[10, 20, 30]
```

# **33. Array Destructuring**

Destructuring allows you to extract array elements into separate variables.

### **Without destructuring**

```
let fruits = ["Apple", "Banana", "Mango"];

let first = fruits[0];
let second = fruits[1];
let third = fruits[2];
```

### **With destructuring**

```
let fruits = ["Apple", "Banana", "Mango"];

let [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);
```

Output:

```
Apple
Banana
Mango
```

## **Skipping Elements**

```
let fruits = ["Apple", "Banana", "Mango"];

let [first, , third] = fruits;

console.log(first);
console.log(third);
```

Output:

```
Apple
Mango
```

## **Default Values**

```
let fruits = ["Apple"];

let [first, second = "Banana"] = fruits;

console.log(first);
console.log(second);
```

Output:

```
Apple
Banana
```

# **34. Multidimensional Arrays**

An array can contain another array.

```
let numbers = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
```

This is a **two-dimensional array**.

Think of it as a table.

|       | Column 0 | Column 1 | Column 2 |
| ----- | -------- | -------- | -------- |
| Row 0 | 10       | 20       | 30       |
| Row 1 | 40       | 50       | 60       |
| Row 2 | 70       | 80       | 90       |

### **Accessing elements**

```
console.log(numbers[0][0]); // 10
console.log(numbers[0][1]); // 20
console.log(numbers[1][2]); // 60
console.log(numbers[2][1]); // 80
```

### **Real-world example**

A seating arrangement:

```
let classroom = [
    ["Ram", "Shyam", "Ravi"],
    ["Kiran", "Arun", "Vijay"],
    ["Ajay", "Rahul", "Suresh"]
];
```

Accessing:

```
console.log(classroom[1][2]);
```

Output:

```
Vijay
```

# **35. Arrays of Objects**

This is one of the **most important concepts for real-world JavaScript development**.

Instead of storing only strings:

```
let students = ["Ram", "Shyam", "Ravi"];
```

You can store objects containing multiple pieces of information.

```
let students = [
    {
        id: 1,
        name: "Ram",
        age: 20,
        marks: 85
    },
    {
        id: 2,
        name: "Shyam",
        age: 21,
        marks: 90
    },
    {
        id: 3,
        name: "Ravi",
        age: 19,
        marks: 75
    }
];
```

### **Accessing data**

```
console.log(students[0].name);
```

Output:

```
Ram
```

```
console.log(students[1].marks);
```

Output:

```
90
```

## **Looping through objects inside arrays**

```
let students = [
    { name: "Ram", marks: 85 },
    { name: "Shyam", marks: 90 },
    { name: "Ravi", marks: 75 }
];

students.forEach(student => {
    console.log(student.name);
});
```

Output:

```
Ram
Shyam
Ravi
```

## **Filtering objects**

```
let students = [
    { name: "Ram", marks: 85 },
    { name: "Shyam", marks: 90 },
    { name: "Ravi", marks: 75 }
];

let result = students.filter(student => student.marks >= 80);

console.log(result);
```

Output:

```
[
    { name: "Ram", marks: 85 },
    { name: "Shyam", marks: 90 }
]
```

## **Transforming objects with&#x20;**`map()`

```
let students = [
    { name: "Ram", marks: 85 },
    { name: "Shyam", marks: 90 },
    { name: "Ravi", marks: 75 }
];

let names = students.map(student => student.name);

console.log(names);
```

Output:

```
["Ram", "Shyam", "Ravi"]
```

# **36. Important Array Methods Summary**

These are the methods you should remember and practice.

| Method       | Purpose                            | Changes Original Array? |
| ------------ | ---------------------------------- | ----------------------- |
| `push()`     | Add at end                         | ✅ Yes                   |
| `pop()`      | Remove from end                    | ✅ Yes                   |
| `unshift()`  | Add at beginning                   | ✅ Yes                   |
| `shift()`    | Remove from beginning              | ✅ Yes                   |
| `splice()`   | Add/remove/replace                 | ✅ Yes                   |
| `slice()`    | Extract elements                   | ❌ No                    |
| `concat()`   | Combine arrays                     | ❌ No                    |
| `includes()` | Check if value exists              | ❌ No                    |
| `indexOf()`  | Find index                         | ❌ No                    |
| `find()`     | Find first matching element        | ❌ No                    |
| `filter()`   | Find all matching elements         | ❌ No                    |
| `map()`      | Transform elements                 | ❌ No                    |
| `reduce()`   | Combine elements into one value    | ❌ No                    |
| `forEach()`  | Execute function for every element | ❌ No                    |
| `some()`     | Check if at least one matches      | ❌ No                    |
| `every()`    | Check if all match                 | ❌ No                    |
| `sort()`     | Sort elements                      | ✅ Yes                   |
| `reverse()`  | Reverse elements                   | ✅ Yes                   |
| `join()`     | Convert array to string            | ❌ No                    |
| `flat()`     | Flatten nested arrays              | ❌ No                    |
| `flatMap()`  | Map and flatten                    | ❌ No                    |
| `fill()`     | Fill elements with a value         | ✅ Yes                   |
| `at()`       | Access an element                  | ❌ No                    |

# **37. Mutating vs Non-Mutating Methods**

This is an important concept in modern JavaScript, especially when working with React.

## **Mutating methods**

These modify the original array.

```
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
fill()
```

Example:

```
let numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);
```

Output:

```
[10, 20, 30, 40]
```

The original array changed.

## **Non-mutating methods**

These generally return a new result without modifying the original array.

```
slice()
concat()
map()
filter()
flat()
flatMap()
```

Example:

```
let numbers = [10, 20, 30];

let result = numbers.map(number => number * 2);

console.log(numbers);
console.log(result);
```

Output:

```
[10, 20, 30]
[20, 40, 60]
```

The original array remains unchanged.

# **38. Practical Real-World Example: Shopping Cart**

Let's combine multiple array concepts.

```
let cart = [
    {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },
    {
        name: "Mouse",
        price: 500,
        quantity: 2
    },
    {
        name: "Keyboard",
        price: 1500,
        quantity: 1
    }
];
```

## **Display all products**

```
cart.forEach(product => {
    console.log(product.name);
});
```

Output:

```
Laptop
Mouse
Keyboard
```

## **Calculate total price**

```
let total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
}, 0);

console.log(total);
```

Output:

```
52500
```

Calculation:

| Product   | Price   | Quantity | Total       |
| --------- | ------- | -------- | ----------- |
| Laptop    | ₹50,000 | 1        | ₹50,000     |
| Mouse     | ₹500    | 2        | ₹1,000      |
| Keyboard  | ₹1,500  | 1        | ₹1,500      |
| **Total** |         |          | **₹52,500** |

## **Find a particular product**

```
let product = cart.find(product => product.name === "Mouse");

console.log(product);
```

Output:

```
{
    name: "Mouse",
    price: 500,
    quantity: 2
}
```

## **Filter products above ₹1,000**

```
let expensiveProducts = cart.filter(product => product.price > 1000);

console.log(expensiveProducts);
```

## **Get only product names**

```
let productNames = cart.map(product => product.name);

console.log(productNames);
```

Output:

```
["Laptop", "Mouse", "Keyboard"]
```

## **Add a product**

```
cart.push({
    name: "Monitor",
    price: 10000,
    quantity: 1
});
```

## **Remove a product**

```
cart.splice(1, 1);

console.log(cart);
```

This removes the product at index `1`.

# **39. Common Array Mistakes**

## **Mistake 1: Forgetting that index starts at 0**

```
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[1]);
```

Output:

```
Banana
```

Not Apple.

## **Mistake 2: Using the wrong loop condition**

Wrong:

```
for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i]);
}
```

Correct:

```
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

Why?

The last valid index is:

```
fruits.length - 1
```

## **Mistake 3: Confusing&#x20;**`slice()`**&#x20;and&#x20;**`splice()`

```
slice()
```

Does not modify the original array.

```
splice()
```

Modifies the original array.

## **Mistake 4: Sorting numbers without a comparison function**

Wrong:

```
numbers.sort();
```

Correct:

```
numbers.sort((a, b) => a - b);
```

## **Mistake 5: Confusing&#x20;**`map()`**&#x20;and&#x20;**`forEach()`

### `map()`

Returns a new array.

```
let numbers = [1, 2, 3];

let result = numbers.map(number => number * 2);

console.log(result);
```

Output:

```
[2, 4, 6]
```

### `forEach()`

Does not return a new transformed array.

```
let numbers = [1, 2, 3];

numbers.forEach(number => {
    console.log(number * 2);
});
```

## **Mistake 6: Using&#x20;**`=`**&#x20;instead of comparison**

Wrong:

```
if (array[0] = 10) {
    console.log("Matched");
}
```

Correct:

```
if (array[0] === 10) {
    console.log("Matched");
}
```

# **40. Array Methods You Should Master First**

Don't try to memorize all methods at once.

For your JavaScript learning, I recommend this order:

## **Level 1 — Fundamentals**

1\. Array creation

2\. Indexing

3\. `length`

4\. Changing elements

5\. `push()`

6\. `pop()`

7\. `shift()`

8\. `unshift()`

9\. `for` loop

10\. `for...of` loop

## **Level 2 — Array Operations**

11\. `includes()`

12\. `indexOf()`

13\. `slice()`

14\. `splice()`

15\. `concat()`

16\. Spread operator

17\. `sort()`

18\. `reverse()`

19\. `join()`

## **Level 3 — Modern Array Methods**

20\. `forEach()`

21\. `map()`

22\. `filter()`

23\. `find()`

24\. `some()`

25\. `every()`

26\. `reduce()`

## **Level 4 — Advanced**

27\. Array destructuring

28\. Arrays of objects

29\. Multidimensional arrays

30\. `flat()`

31\. `flatMap()`

32\. `Array.from()`

33\. `Array.of()`

34\. `at()`

35\. Mutating vs non-mutating methods

# **41. Practice Exercises — Arrays**

Now, don't just read. Practice these questions yourself.

## **Beginner Level**

### **Exercise 1 — Create an Array**

Create an array containing 5 fruits and print the entire array.

### **Exercise 2 — Access Elements**

Given:

```
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
```

Print:

- First element
- Third element
- Last element

### **Exercise 3 — Array Length**

Find the total number of elements in:

```
let numbers = [10, 20, 30, 40, 50, 60];
```

### **Exercise 4 — Change Elements**

Given:

```
let fruits = ["Apple", "Banana", "Mango"];
```

Change `"Banana"` to `"Orange"`.

### **Exercise 5 — Add Elements**

Given:

```
let students = ["Ram", "Shyam"];
```

Add `"Ravi"` at the end and `"Kiran"` at the beginning.

### **Exercise 6 — Remove Elements**

Given:

```
let fruits = ["Apple", "Banana", "Mango", "Orange"];
```

Remove:

- Last element
- First element

## **Intermediate Level**

### **Exercise 7 — Loop Through an Array**

Print every element using a `for` loop.

```
let numbers = [10, 20, 30, 40, 50];
```

### **Exercise 8 — Find Even Numbers**

Given:

```
let numbers = [10, 15, 20, 25, 30, 35, 40];
```

Print only the even numbers.

Expected output:

```
10
20
30
40
```

### **Exercise 9 — Find the Sum**

Calculate the sum of:

```
let numbers = [10, 20, 30, 40, 50];
```

Expected output:

```
150
```

### **Exercise 10 — Find the Largest Number**

Given:

```
let numbers = [10, 50, 20, 90, 30];
```

Find the largest number without using `Math.max()`.

### **Exercise 11 — Find the Smallest Number**

Given:

```
let numbers = [40, 10, 50, 20, 5];
```

Find the smallest number.

### **Exercise 12 — Search for an Element**

Given:

```
let students = ["Ram", "Shyam", "Ravi", "Kiran"];
```

Check whether `"Ravi"` exists.

Use:

```
includes()
```

# **Advanced Practice**

### **Exercise 13 — Use&#x20;**`filter()`

Given:

```
let numbers = [10, 15, 20, 25, 30, 35, 40];
```

Create a new array containing numbers greater than `25`.

Expected:

```
[30, 35, 40]
```

### **Exercise 14 — Use&#x20;**`map()`

Given:

```
let numbers = [1, 2, 3, 4, 5];
```

Create a new array containing the square of every number.

Expected:

```
[1, 4, 9, 16, 25]
```

### **Exercise 15 — Use&#x20;**`reduce()`

Given:

```
let prices = [100, 200, 300, 400];
```

Calculate the total price.

Expected:

```
1000
```

### **Exercise 16 — Find Students**

```
let students = [
    { name: "Ram", marks: 85 },
    { name: "Shyam", marks: 45 },
    { name: "Ravi", marks: 90 },
    { name: "Kiran", marks: 60 }
];
```

Find all students who scored more than `70`.

Expected:

```
[
    { name: "Ram", marks: 85 },
    { name: "Ravi", marks: 90 }
]
```

### **Exercise 17 — Shopping Cart**

```
let cart = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];
```

Tasks:

1. Print all product names.
2. Find the product with a price greater than ₹1,000.
3. Calculate the total price.
4. Add a new product.
5. Remove the Mouse.
6. Sort products according to price.

### **Exercise 18 — Remove Duplicates**

Given:

```
let numbers = [10, 20, 10, 30, 20, 40, 50, 40];
```

Create a new array containing unique values.

Expected:

```
[10, 20, 30, 40, 50]
```

Hint:

```
Set
```

# **42. The Most Important Array Concepts for Interviews**

If you are preparing for Software Engineer or Backend Developer interviews, focus particularly on:

| Topic                     | Importance |
| ------------------------- | ---------- |
| Array indexing            | ⭐⭐⭐⭐⭐      |
| Array traversal           | ⭐⭐⭐⭐⭐      |
| `for` loop                | ⭐⭐⭐⭐⭐      |
| `for...of`                | ⭐⭐⭐⭐⭐      |
| `push()` and `pop()`      | ⭐⭐⭐⭐⭐      |
| `shift()` and `unshift()` | ⭐⭐⭐⭐       |
| `slice()` and `splice()`  | ⭐⭐⭐⭐⭐      |
| `map()`                   | ⭐⭐⭐⭐⭐      |
| `filter()`                | ⭐⭐⭐⭐⭐      |
| `find()`                  | ⭐⭐⭐⭐⭐      |
| `reduce()`                | ⭐⭐⭐⭐⭐      |
| `sort()`                  | ⭐⭐⭐⭐⭐      |
| `includes()`              | ⭐⭐⭐⭐       |
| `indexOf()`               | ⭐⭐⭐⭐       |
| Arrays of objects         | ⭐⭐⭐⭐⭐      |
| Spread operator           | ⭐⭐⭐⭐⭐      |
| Destructuring             | ⭐⭐⭐⭐       |
| `some()` and `every()`    | ⭐⭐⭐⭐       |
| Multidimensional arrays   | ⭐⭐⭐⭐       |
| Time complexity           | ⭐⭐⭐⭐⭐      |

# **43. Array Time Complexity — Important for Interviews**

Understanding time complexity helps you write efficient code.

| Operation       | Typical Time Complexity |
| --------------- | ----------------------- |
| Access by index | `O(1)`                  |
| Update by index | `O(1)`                  |
| `push()`        | `O(1)` amortized        |
| `pop()`         | `O(1)`                  |
| `shift()`       | `O(n)`                  |
| `unshift()`     | `O(n)`                  |
| `includes()`    | `O(n)`                  |
| `indexOf()`     | `O(n)`                  |
| `find()`        | `O(n)`                  |
| `filter()`      | `O(n)`                  |
| `map()`         | `O(n)`                  |
| `forEach()`     | `O(n)`                  |
| `reduce()`      | `O(n)`                  |
| `sort()`        | Usually `O(n log n)`    |
| `splice()`      | Usually `O(n)`          |

### **Why are&#x20;**`shift()`**&#x20;and&#x20;**`unshift()`**&#x20;generally slower?**

Consider:

```
let numbers = [10, 20, 30, 40];
```

If you remove the first element:

```
numbers.shift();
```

The remaining elements must move to new positions.

Conceptually:

```
Before:

Index 0 → 10
Index 1 → 20
Index 2 → 30
Index 3 → 40

After shift():

Index 0 → 20
Index 1 → 30
Index 2 → 40
```

This is why removing from the beginning generally requires more work than removing from the end.

# **44. Final Mental Model of JavaScript Arrays**

Think about an array like a **numbered container**.

```
let numbers = [10, 20, 30, 40];
```

Index 0

# **10**

Index 1

# **20**

Index 2

# **30**

Index 3

# **40**

Array positions begin at 0.

You can:

- **Access** → `numbers[0]`
- **Update** → `numbers[0] = 100`
- **Add** → `numbers.push(50)`
- **Remove** → `numbers.pop()`
- **Loop** → `for`, `for...of`, `forEach()`
- **Search** → `includes()`, `indexOf()`, `find()`
- **Filter** → `filter()`
- **Transform** → `map()`
- **Calculate** → `reduce()`
- **Sort** → `sort()`
- **Extract** → `slice()`
- **Modify** → `splice()`

## **My recommendation for your learning**

Since you're learning JavaScript for your backend-development career and also working toward React, don't try to learn every array method in one day.

Learn in this order:

**Day 1:** Array creation, index, length, changing elements

**Day 2:** `push()`, `pop()`, `shift()`, `unshift()`

**Day 3:** `for` loop, `for...of`, `forEach()`

**Day 4:** `includes()`, `indexOf()`, `find()`

**Day 5:** `slice()`, `splice()`, `concat()`, spread operator

**Day 6:** `map()`, `filter()`

**Day 7:** `reduce()`, `some()`, `every()`, `sort()`

**Day 8:** Arrays of objects and real-world problems

**Day 9:** Practice 15–20 array coding problems

**Day 10:** Build a small shopping-cart program using arrays.

The most important methods to become comfortable with are:

```
push()
pop()
for
for...of
forEach()
map()
filter()
find()
reduce()
slice()
splice()
includes()
sort()
```

If you understand these deeply and can solve problems using them, you will have a **strong foundation in JavaScript Arrays**.

                            FUNCTIONS 
       A Function is Block of code in which it is used to perfrom specfic task   

       Syntax 
       function functionName(parameters) {
    // Code to execute
}

# **Phase 1 — JavaScript Function Fundamentals**

Phase 1 contains **7 core concepts**. These are the foundation for everything else in JavaScript Functions.

## **Phase 1 Learning Order**

1. Function Declaration
2. Function Calling
3. Parameters and Arguments
4. Return Statement
5. Functions Without Return
6. Function Scope
7. Local Variables and Global Variables

Let's understand each one with simple explanations and real-world examples.

# **1. Function Declaration**

### **What is a Function?**

A **function is a reusable block of code that performs a particular task**.

Instead of writing the same code multiple times, we can write it once inside a function and use it whenever required.

### **Why do we use functions?**

Imagine you are developing an application and you need to display a welcome message 5 times.

Without a function:

```
console.log("Welcome to our application");
console.log("Welcome to our application");
console.log("Welcome to our application");
console.log("Welcome to our application");
console.log("Welcome to our application");
```

This creates unnecessary repetition.

Instead, we can create a function:

```
function welcome() {
    console.log("Welcome to our application");
}
```

Now we have created a reusable block of code.

### **Syntax**

```
function functionName() {
    // Code to execute
}
```

Example:

```
function greet() {
    console.log("Hello!");
}
```

### **Understanding the code**

```
function greet() {
    console.log("Hello!");
}
```

| Part            | Meaning                           |
| --------------- | --------------------------------- |
| `function`      | Keyword used to create a function |
| `greet`         | Function name                     |
| `()`            | Used for parameters               |
| `{}`            | Function body                     |
| `console.log()` | Code executed inside the function |

### **Real-world example: E-commerce application**

Imagine an e-commerce website.

Whenever a user visits the website, you want to display a welcome message.

```
function welcomeUser() {
    console.log("Welcome to Amazon!");
}
```

You can reuse this function whenever necessary.

### **Where is it used in industry?**

**Frontend:**

- Displaying messages
- Validating forms
- Handling buttons
- Updating UI

**Backend:**

- Processing user data
- Calculating prices
- Creating users
- Handling API requests

**Example backend logic:**

```
function calculateTotalPrice() {
    console.log("Calculating total price...");
}
```

Functions help developers organize large applications into smaller, manageable pieces of code.

# **2. Function Calling**

Creating a function does not automatically execute the code inside it.

To execute the function, we need to **call it**.

### **Example**

```
function greet() {
    console.log("Hello!");
}

greet();
```

Output:

```
Hello!
```

### **How does it work?**

1. JavaScript reads the function declaration.
2. The function is created but its body is not executed yet.
3. When JavaScript encounters `greet()`, it calls the function.
4. The code inside the function executes.
5. `Hello!` is printed.

### **Real-world example**

```
function loginUser() {
    console.log("User logged in successfully");
}

loginUser();
```

The function executes only when `loginUser()` is called.

### **Important difference**

```
function greet() {
    console.log("Hello");
}
```

This **creates** the function.

```
greet();
```

This **calls** the function.

### **Real-world usage**

Functions are called when:

- A button is clicked
- A form is submitted
- An API request is made
- A user logs in
- A payment is processed
- A page loads

# **3. Parameters and Arguments**

This is one of the most important concepts in functions.

## **What are Parameters?**

**Parameters are variables defined inside the function declaration that receive values.**

## **What are Arguments?**

**Arguments are the actual values passed when calling a function.**

### **Example**

```
function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Rahul");
```

Here:

```
function greetUser(name)
```

`name` is a **parameter**.

```
greetUser("Rahul");
```

`"Rahul"` is an **argument**.

### **Visual explanation**

Function Declaration

`function greetUser(name)`

name = Parameter

Function Calling

`greetUser("Rahul")`

"Rahul" = Argument

### **How does it work?**

```
function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Rahul");
```

Step by step:

1. JavaScript sees the function declaration.
2. The function is created.
3. `greetUser("Rahul")` calls the function.
4. `"Rahul"` is passed into the function.
5. The parameter `name` receives `"Rahul"`.
6. JavaScript executes the function body.

Output:

```
Hello Rahul
```

## **Real-world example: User registration**

Imagine a registration form.

The user enters:

- Name: Rahul
- Age: 22

We can pass these values into a function.

```
function registerUser(name, age) {
    console.log("User Name: " + name);
    console.log("User Age: " + age);
}

registerUser("Rahul", 22);
```

Output:

```
User Name: Rahul
User Age: 22
```

### **Why is this useful?**

We don't need to create a separate function for every user.

```
registerUser("Rahul", 22);
registerUser("Priya", 25);
registerUser("Amit", 21);
```

The same function can process different users.

### **Industry example**

```
function calculateDiscount(price, discountPercentage) {
    let discount = price * discountPercentage / 100;

    console.log("Discount: " + discount);
}

calculateDiscount(1000, 10);
calculateDiscount(5000, 20);
```

Output:

```
Discount: 100
Discount: 1000
```

# **4. Return Statement**

This is extremely important.

### **What is&#x20;**`return`**?**

The `return` statement sends a value **back from the function to the place where the function was called**.

### **Example**

```
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output:

```
30
```

### **How does it work?**

```
function add(a, b) {
    return a + b;
}
```

When you call:

```
add(10, 20);
```

The function calculates:

```
10 + 20
```

The result is:

```
30
```

Then:

```
return 30;
```

The value `30` is sent back to the caller.

So:

```
let result = add(10, 20);
```

is effectively:

```
let result = 30;
```

## `console.log()`**&#x20;vs&#x20;**`return`

This is a very important interview concept.

### **Using&#x20;**`console.log()`

```
function add(a, b) {
    console.log(a + b);
}

let result = add(10, 20);

console.log(result);
```

Output:

```
30
undefined
```

Why?

The function prints `30`, but it doesn't return anything.

Therefore, `result` receives `undefined`.

### **Using&#x20;**`return`

```
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output:

```
30
```

Now the value can be reused.

## **Real-world example: Shopping cart**

```
function calculateCartTotal(price, quantity) {
    return price * quantity;
}

let total = calculateCartTotal(500, 3);

console.log("Total Amount: ₹" + total);
```

Output:

```
Total Amount: ₹1500
```

The returned value can be used elsewhere.

For example:

```
let total = calculateCartTotal(500, 3);

if (total > 1000) {
    console.log("Free delivery available");
}
```

This is why `return` is essential in real applications.

### **Where is&#x20;**`return`**&#x20;used?**

- Calculating prices
- Validating data
- Processing API responses
- Returning database results
- Creating reusable logic
- Filtering or transforming data
- React components
- Backend services

# **5. Functions Without Return**

A function does not always need to return a value.

Some functions simply perform an action.

### **Example**

```
function showMessage() {
    console.log("Welcome!");
}

showMessage();
```

This function performs an action: displaying a message.

It doesn't return anything.

### **What happens if we store its result?**

```
function showMessage() {
    console.log("Welcome!");
}

let result = showMessage();

console.log(result);
```

Output:

```
Welcome!
undefined
```

JavaScript automatically returns `undefined` when a function doesn't explicitly return a value.

## **Real-world example: Logging**

```
function logUserActivity(username) {
    console.log(username + " logged in");
}

logUserActivity("Rahul");
```

This function performs an action.

It doesn't need to return a value.

### **Another example: Button action**

```
function showAlert() {
    alert("Form submitted successfully!");
}
```

This function performs an action rather than calculating and returning a value.

### **When should we use functions without&#x20;**`return`**?**

Use them when the function's main purpose is to perform an action:

- Display messages
- Update the UI
- Log information
- Send notifications
- Handle events

# **6. Function Scope**

### **What is Scope?**

**Scope determines where a variable can be accessed in JavaScript.**

In simple terms:

> Scope decides where a variable is available to use.

JavaScript has different types of scope, but for Phase 1, focus on:

- Global Scope
- Function Scope
- Block Scope

## **Global Scope**

A variable declared outside a function is generally available throughout the accessible program.

```
let username = "Rahul";

function greet() {
    console.log(username);
}

greet();
```

Output:

```
Rahul
```

The variable `username` is accessible inside the function.

## **Function Scope**

Variables declared inside a function are generally accessible only inside that function.

```
function greet() {
    let message = "Hello";

    console.log(message);
}

greet();
```

Output:

```
Hello
```

But:

```
function greet() {
    let message = "Hello";
}

console.log(message);
```

This produces an error because `message` exists only inside `greet()`.

### **Visual explanation**

**Global Scope**

`let username = "Rahul"`

**Function Scope: greet()**

`let message = "Hello"`

message can be accessed inside greet(), but not outside it.

# **7. Local Variables and Global Variables**

These concepts are closely related to scope.

## **Global Variable**

A variable declared outside functions.

```
let company = "Google";

function displayCompany() {
    console.log(company);
}

displayCompany();
```

`company` is a global variable.

It can be accessed from different parts of the program, subject to scope rules.

## **Local Variable**

A variable declared inside a function.

```
function displayUser() {
    let username = "Rahul";

    console.log(username);
}

displayUser();
```

`username` is a local variable.

It can only be accessed inside the function where it is declared.

## **Comparison**

| Feature       | Global Variable                      | Local Variable            |
| ------------- | ------------------------------------ | ------------------------- |
| Declaration   | Outside function                     | Inside function           |
| Accessibility | Multiple parts of program            | Limited to its scope      |
| Lifetime      | Usually throughout program execution | While its scope is active |
| Reusability   | Accessible from many places          | Used within its scope     |
| Risk          | Can accidentally be modified         | Safer and more controlled |

### **Real-world example**

```
let companyName = "Tech Solutions";

function calculateSalary() {
    let salary = 30000;

    console.log(companyName);
    console.log(salary);
}

calculateSalary();
```

Output:

```
Tech Solutions
30000
```

Here:

- `companyName` → Global variable
- `salary` → Local variable

# **Phase 1 — Real-World Combined Example**

Let's combine everything we learned into a simple employee salary calculator.

```
let companyName = "Tech Solutions";

function calculateEmployeeSalary(name, basicSalary, bonus) {
    let totalSalary = basicSalary + bonus;

    console.log("Company: " + companyName);
    console.log("Employee: " + name);
    console.log("Basic Salary: " + basicSalary);
    console.log("Bonus: " + bonus);

    return totalSalary;
}

let salary = calculateEmployeeSalary("Rahul", 25000, 5000);

console.log("Total Salary: " + salary);
```

Output:

```
Company: Tech Solutions
Employee: Rahul
Basic Salary: 25000
Bonus: 5000
Total Salary: 30000
```

### **Concepts used**

| Concept              | Code                                      |
| -------------------- | ----------------------------------------- |
| Function Declaration | `function calculateEmployeeSalary()`      |
| Function Calling     | `calculateEmployeeSalary(...)`            |
| Parameters           | `name, basicSalary, bonus`                |
| Arguments            | `"Rahul", 25000, 5000`                    |
| Local Variable       | `totalSalary`                             |
| Global Variable      | `companyName`                             |
| Return               | `return totalSalary`                      |
| Function Reusability | Call the function for different employees |

You can reuse it:

```
let salary1 = calculateEmployeeSalary("Rahul", 25000, 5000);

let salary2 = calculateEmployeeSalary("Priya", 30000, 7000);

let salary3 = calculateEmployeeSalary("Amit", 20000, 3000);
```

This is the core purpose of functions in real-world development: **reusability, organization, modularity, and easier maintenance.**

# **Phase 1 — What you must understand before moving forward**

## **Core Concepts Summary**

| Function Declaration    | Create a reusable block of code.                 |
| ----------------------- | ------------------------------------------------ |
| Function Calling        | Execute the function.                            |
| Parameters              | Variables that receive values inside a function. |
| Arguments               | Actual values passed during function calling.    |
| Return                  | Send a value back from a function.               |
| Function Without Return | Perform an action without returning a value.     |
| Scope                   | Determines where variables can be accessed.      |
| Global Variable         | Declared outside a function.                     |
| Local Variable          | Declared inside a function.                      |

## **Practice Exercises**

Try solving these without looking at the answers.

### **Easy**

**1. Create a function**

Create a function named `sayHello()` that prints:

```
Hello, JavaScript!
```

**2. Function Calling**

Create a function named `welcome()` that prints:

```
Welcome to my website
```

Call it 3 times.

**3. Parameters and Arguments**

Create a function that accepts your name and prints:

```
My name is Chandrakanth
```

**4. Return**

Create a function that accepts two numbers and returns their sum.

```
let result = addNumbers(10, 20);
console.log(result);
```

Expected output:

```
30
```

### **Intermediate**

**5. Calculate Total Price**

Create a function that accepts:

- Product price
- Quantity

Return the total price.

Example:

```
calculateTotal(500, 3);
```

Expected:

```
1500
```

**6. Check Even or Odd**

Create a function that accepts a number and returns whether the number is even or odd.

**7. Employee Salary**

Create a function that accepts:

- Employee name
- Basic salary
- Bonus

Return the total salary.

**8. Scope Debugging**

What will happen here?

```
function test() {
    let message = "Hello";
}

console.log(message);
```

Explain why.

### **My recommendation**

Before moving to Phase 2, make sure you can confidently:

1. Create a function.
2. Call a function.
3. Pass data using parameters and arguments.
4. Return values from functions.
5. Understand the difference between `return` and `console.log()`.
6. Understand global and local variables.
7. Explain why functions are used in real applications.

**Phase 1 is the foundation.** If these concepts are clear, understanding Function Expressions, Arrow Functions, Callbacks, `map()`, `filter()`, and Closures will become much easier.

                             MAPS
map() is an array method that executes a function on every element of an array and returns a new array containing the modified values.


Real-time example Without Map
Suppose you have product prices and want to add 10% tax to every price.
let prices = [100, 200, 300, 400];

let updatedPrices = [];

for (let i = 0; i < prices.length; i++) {
    updatedPrices.push(prices[i] + (prices[i] * 0.10));
}

console.log(updatedPrices);

with Map
let prices = [100, 200, 300, 400];

let updatedPrices = prices.map(price => price + (price * 0.10));

console.log(updatedPrices);

                            Filtes
filter() is an array method used to filter elements from an array based on a condition. It returns a new array containing only the elements that satisfy the condition.

Real-time Example: Without filter()
Suppose an application has a list of product prices, and we want to get only products costing more than ₹500.
let prices = [200, 500, 800, 1200, 300];

let expensivePrices = [];

for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 500) {
        expensivePrices.push(prices[i]);
    }
}

console.log(expensivePrices);

with Filter
let prices = [200, 500, 800, 1200, 300];

let expensivePrices = prices.filter(price => price > 500);

console.log(expensivePrices);

                                 Reduce
reduce() is an array method used to reduce all elements of an array into a single value.
Real-time Example: Without reduce()
Suppose an e-commerce application has multiple product prices, and we want to calculate the total amount.
let prices = [100, 200, 300, 400];

let total = 0;

for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

console.log(total);

with Reduce
let prices = [100, 200, 300, 400];

let total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);
Real-world uses of reduce()
- Calculate total shopping cart price.
- Calculate total salary of employees.
- Calculate total marks of students.
- Count occurrences of elements.
- Convert an array into an object.
- Calculate averages.

# **1. What is DOM?**

**DOM (Document Object Model)** is a programming interface that represents an HTML document as a **tree structure of objects**, allowing JavaScript to access and modify the webpage's content, structure, and styles.

In simple words:

> **DOM is the connection between HTML and JavaScript that allows JavaScript to interact with a webpage.**

# **2. What is the exact use of DOM?**

The main purpose of DOM is to allow JavaScript to **dynamically interact with HTML elements**.

Without DOM, JavaScript cannot easily change the webpage after it has been loaded.

Using DOM, we can:

- Change text on a webpage.
- Change CSS styles.
- Add new HTML elements.
- Remove existing HTML elements.
- Change HTML attributes.
- Respond to user actions such as clicks and typing.

# **3. How DOM works — Neat Diagram**

Imagine you have this HTML:

```
<html>
    <body>
        <h1>Hello World</h1>
        <button>Click Me</button>
    </body>
</html>
```

The browser converts this HTML into a DOM tree.

**HTML Document**

**DOM Tree**

Browser represents HTML as objects

**html**

**body**

**h1**

Hello World

**button**

Click Me

**JavaScript**

Accesses and modifies DOM elements

# **4. Where is DOM used?**

DOM is used in **frontend web development** whenever a webpage needs to change dynamically.

### **Real-time examples**

| Situation                   | Use of DOM                |
| --------------------------- | ------------------------- |
| User clicks a button        | Change button text        |
| User submits a form         | Display success message   |
| User searches for a product | Display search results    |
| User adds an item to cart   | Update cart items         |
| User clicks Dark Mode       | Change webpage appearance |
| User deletes a task         | Remove task from webpage  |
| User types in search box    | Display suggestions       |

### **Real-time example**

Suppose a webpage contains:

```
<h1>Hello User</h1>
<button>Click Me</button>
```

JavaScript can use the DOM to change the heading when the button is clicked:

```
document.querySelector("button").addEventListener("click", function () {
    document.querySelector("h1").innerText = "Welcome!";
});
```

**Before clicking:**

## **Hello User**

Click Me

**After clicking:**

## **Welcome!**

Click Me

The HTML file itself doesn't need to be reloaded. JavaScript changes the webpage through the DOM.

**Remember this:** HTML creates the webpage → Browser creates the DOM → JavaScript uses the DOM to modify the webpage.


# **2. Selecting HTML Elements in DOM**

Before JavaScript can modify an HTML element, it must first **select that element**.

For example, if you want to change the text of a heading, JavaScript needs to identify which heading you want to modify.

There are different methods to select HTML elements.

## **A.&#x20;**`getElementById()`

**Definition:** Selects an HTML element using its unique `id`.

### **HTML**

```
<h1 id="heading">Hello World</h1>
```

### **JavaScript**

```
let heading = document.getElementById("heading");

console.log(heading);
```

### **Real-time example**

Suppose you want to change the heading text:

```
let heading = document.getElementById("heading");

heading.innerText = "Welcome to JavaScript";
```

The webpage changes from:

**Hello World**

to:

**Welcome to JavaScript**

### **Why do we use it?**

When we need to select a **specific element** using its unique ID.

## **B.&#x20;**`getElementsByClassName()`

**Definition:** Selects HTML elements using their class name.

### **HTML**

```
<p class="text">Paragraph 1</p>
<p class="text">Paragraph 2</p>
<p class="text">Paragraph 3</p>
```

### **JavaScript**

```
let paragraphs = document.getElementsByClassName("text");

console.log(paragraphs);
```

It selects all three paragraph elements.

To access one particular paragraph:

```
console.log(paragraphs[0]);
```

To change all paragraphs:

```
for (let paragraph of paragraphs) {
    paragraph.style.color = "blue";
}
```

### **Why do we use it?**

When we want to select **multiple elements having the same class**.

## **C.&#x20;**`getElementsByTagName()`

**Definition:** Selects HTML elements using their tag name.

### **HTML**

```
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>
```

### **JavaScript**

```
let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);
```

This selects all `<p>` elements.

### **Real-time example**

Change the color of all paragraphs:

```
let paragraphs = document.getElementsByTagName("p");

for (let paragraph of paragraphs) {
    paragraph.style.color = "red";
}
```

### **Why do we use it?**

When we want to select elements based on their **HTML tag**.

## **Summary**

| Method                     | Used to select          |
| -------------------------- | ----------------------- |
| `getElementById()`         | Element using ID        |
| `getElementsByClassName()` | Elements using class    |
| `getElementsByTagName()`   | Elements using tag name |

Next, we can learn `querySelector()`**&#x20;and&#x20;**`querySelectorAll()`.

# **3.&#x20;**`querySelector()`**&#x20;and&#x20;**`querySelectorAll()`

These are modern methods used to select HTML elements using **CSS selectors**.

They are very useful because you can select elements using IDs, classes, tags, attributes, and other CSS selectors.

## **A.&#x20;**`querySelector()`

**Definition:** Selects the **first HTML element** that matches the specified CSS selector.

### **Syntax**

```
document.querySelector("selector");
```

### **1. Selecting by ID**

HTML:

```
<h1 id="heading">Hello World</h1>
```

JavaScript:

```
let heading = document.querySelector("#heading");

console.log(heading);
```

`#` is used to select an ID.

### **2. Selecting by Class**

HTML:

```
<p class="text">Paragraph 1</p>
<p class="text">Paragraph 2</p>
```

JavaScript:

```
let paragraph = document.querySelector(".text");

console.log(paragraph);
```

`.` is used to select a class.

**Important:** Even though two paragraphs have the same class, `querySelector()` selects only the **first matching element**.

### **3. Selecting by Tag**

HTML:

```
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

JavaScript:

```
let paragraph = document.querySelector("p");

console.log(paragraph);
```

It selects the first `<p>` element.

## **B.&#x20;**`querySelectorAll()`

**Definition:** Selects **all HTML elements** that match the specified CSS selector.

### **Syntax**

```
document.querySelectorAll("selector");
```

### **Example**

HTML:

```
<p class="text">Paragraph 1</p>
<p class="text">Paragraph 2</p>
<p class="text">Paragraph 3</p>
```

JavaScript:

```
let paragraphs = document.querySelectorAll(".text");

console.log(paragraphs);
```

It selects all three paragraphs.

### **Real-time example**

Suppose you want to change the color of all paragraphs:

```
let paragraphs = document.querySelectorAll(".text");

paragraphs.forEach(function (paragraph) {
    paragraph.style.color = "blue";
});
```

All three paragraphs become blue.

## **Difference between&#x20;**`querySelector()`**&#x20;and&#x20;**`querySelectorAll()`

| Method               | What it selects        | Example                              |
| -------------------- | ---------------------- | ------------------------------------ |
| `querySelector()`    | First matching element | `document.querySelector(".text")`    |
| `querySelectorAll()` | All matching elements  | `document.querySelectorAll(".text")` |

### **Remember**

```
querySelector()
```

➡️ **One element**

```
querySelectorAll()
```

➡️ **All matching elements**

Both methods use **CSS selector syntax**.

| Selector     | Meaning               |
| ------------ | --------------------- |
| `"#heading"` | Select by ID          |
| `".text"`    | Select by class       |
| `"p"`        | Select by tag         |
| `"button"`   | Select buttons        |
| `"input"`    | Select input elements |

That's the next part of DOM element selection.

# **JavaScript DOM — 10 Important Concepts for Real-World Development**

These are the core DOM concepts commonly used when building interactive web applications.

# **1.&#x20;**`querySelector()`**&#x20;and&#x20;**`querySelectorAll()`

### **Definition**

These methods are used to **select HTML elements from the DOM using CSS selectors**.

### `querySelector()`

Selects the **first matching element**.

### **Real-time example: Selecting a login button**

HTML:

```
<button class="login-btn">Login</button>
```

JavaScript:

```
let button = document.querySelector(".login-btn");

console.log(button);
```

Here, JavaScript selects the login button using its class.

### `querySelectorAll()`

Selects **all matching elements**.

HTML:

```
<p class="message">Hello</p>
<p class="message">Welcome</p>
<p class="message">Good Morning</p>
```

JavaScript:

```
let messages = document.querySelectorAll(".message");

messages.forEach(function (message) {
    console.log(message.innerText);
});
```

### **Real-time use**

- Selecting buttons
- Selecting input fields
- Selecting product cards
- Selecting navigation elements
- Selecting multiple elements to modify them

# **2.&#x20;**`innerText`**,&#x20;**`textContent`**, and&#x20;**`innerHTML`

These properties are used to **read or change the content inside HTML elements**.

## **A.&#x20;**`innerText`

**Definition:** Gets or sets the visible text content of an HTML element.

HTML:

```
<h1 id="heading">Hello World</h1>
```

JavaScript:

```
let heading = document.querySelector("#heading");

heading.innerText = "Welcome to JavaScript";
```

Output on webpage:

```
Welcome to JavaScript
```

### **Real-time use**

Changing button text after clicking:

```
button.innerText = "Submitted";
```

## **B.&#x20;**`textContent`

**Definition:** Gets or sets the text content of an element and its descendants.

HTML:

```
<div id="container">
    <h1>Hello</h1>
    <p>Welcome</p>
</div>
```

JavaScript:

```
let container = document.querySelector("#container");

console.log(container.textContent);
```

Output:

```
Hello
Welcome
```

Changing it:

```
container.textContent = "New content";
```

## **C.&#x20;**`innerHTML`

**Definition:** Gets or sets the HTML content inside an element.

HTML:

```
<div id="container"></div>
```

JavaScript:

```
let container = document.querySelector("#container");

container.innerHTML = "<h1>Hello</h1><p>Welcome</p>";
```

Now the browser creates actual HTML elements inside the container.

### **Difference**

| Property      | Use                      |
| ------------- | ------------------------ |
| `innerText`   | Read/change visible text |
| `textContent` | Read/change text content |
| `innerHTML`   | Read/change HTML content |

### **Real-time use**

Displaying dynamically generated content, messages, product information, etc.

⚠️ Avoid inserting untrusted user input directly using `innerHTML`, because it can create XSS security vulnerabilities.

# **3.&#x20;**`value`

### **Definition**

The `value` property is used to **get or change the value entered inside form elements**, such as input fields.

### **Real-time example: Login form**

HTML:

```
<input type="text" id="username" placeholder="Enter username">

<button id="loginBtn">Login</button>
```

JavaScript:

```
let username = document.querySelector("#username");
let button = document.querySelector("#loginBtn");

button.addEventListener("click", function () {

    console.log(username.value);

});
```

If the user enters:

```
Rahul
```

JavaScript gets:

```
"Rahul"
```

### **Changing the input value**

```
username.value = "Chandrakanth";
```

The input field will now contain `Chandrakanth`.

### **Real-time use**

- Login forms
- Registration forms
- Search boxes
- Contact forms
- User input validation

# **4.&#x20;**`getAttribute()`**&#x20;and&#x20;**`setAttribute()`

These methods are used to **read and modify HTML attributes**.

HTML attributes are values written inside HTML tags.

Example:

```
<img src="profile.jpg" alt="Profile Image">
```

Here, `src` and `alt` are attributes.

## **A.&#x20;**`getAttribute()`

### **Definition**

Gets the value of a specified HTML attribute.

### **Example**

HTML:

```
<img id="profile" src="profile.jpg" alt="Profile">
```

JavaScript:

```
let image = document.querySelector("#profile");

console.log(image.getAttribute("src"));
```

Output:

```
profile.jpg
```

## **B.&#x20;**`setAttribute()`

### **Definition**

Sets or changes the value of an HTML attribute.

### **Example**

```
let image = document.querySelector("#profile");

image.setAttribute("src", "new-profile.jpg");
```

The image changes to `new-profile.jpg`.

### **Real-time use**

Changing:

- Image URLs
- Link destinations
- Input placeholders
- Input types
- Button attributes

Example:

```
let input = document.querySelector("#username");

input.setAttribute("placeholder", "Enter your name");
```

# **5.&#x20;**`style`

### **Definition**

The `style` property is used to **change CSS styles directly using JavaScript**.

### **Real-time example: Changing button appearance**

HTML:

```
<button id="button">Click Me</button>
```

JavaScript:

```
let button = document.querySelector("#button");

button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.padding = "10px";
```

Now the button has:

- Blue background
- White text
- Padding

### **Real-time use**

- Changing colors
- Hiding elements
- Showing elements
- Changing dimensions
- Creating dynamic UI effects

Example:

```
let message = document.querySelector("#message");

message.style.display = "none";
```

This hides the element.

# **6.&#x20;**`classList`

### **Definition**

`classList` is used to **add, remove, toggle, or check CSS classes on an HTML element using JavaScript**.

This is widely used because changing CSS classes is generally cleaner than manually changing multiple styles.

## **A.&#x20;**`classList.add()`

Adds a CSS class.

HTML:

```
<div id="box"></div>
```

CSS:

```
.active {
    background-color: green;
    color: white;
}
```

JavaScript:

```
let box = document.querySelector("#box");

box.classList.add("active");
```

## **B.&#x20;**`classList.remove()`

Removes a CSS class.

```
box.classList.remove("active");
```

## **C.&#x20;**`classList.toggle()`

Adds a class if it doesn't exist; removes it if it already exists.

```
box.classList.toggle("active");
```

### **Real-time example: Dark mode**

HTML:

```
<button id="darkModeBtn">Dark Mode</button>
```

CSS:

```
.dark {
    background-color: black;
    color: white;
}
```

JavaScript:

```
let button = document.querySelector("#darkModeBtn");

button.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});
```

Every time the user clicks the button, dark mode is enabled or disabled.

### **Real-time use**

- Dark mode
- Active navigation links
- Dropdown menus
- Modal windows
- Selected buttons
- Form error states

# **7.&#x20;**`createElement()`

### **Definition**

`createElement()` is used to **create a new HTML element dynamically using JavaScript**.

### **Real-time example: Creating a new product card**

JavaScript:

```
let product = document.createElement("div");

product.innerText = "Laptop";
```

This creates:

```
<div>Laptop</div>
```

However, the element is not yet displayed on the webpage.

You need to add it to the DOM.

### **Real-time use**

- Creating product cards
- Creating task items
- Creating notifications
- Creating comments
- Creating list items dynamically

# **8.&#x20;**`append()`**&#x20;and&#x20;**`remove()`

These methods are used to **add elements to the DOM and remove elements from the DOM**.

## **A.&#x20;**`append()`

### **Definition**

Adds content or elements at the end of a parent element.

HTML:

```
<ul id="studentList"></ul>
```

JavaScript:

```
let studentList = document.querySelector("#studentList");

let student = document.createElement("li");

student.innerText = "Rahul";

studentList.append(student);
```

Result:

```
<ul id="studentList">
    <li>Rahul</li>
</ul>
```

### **Real-time use**

Adding:

- Students
- Tasks
- Products
- Comments
- Notifications

## **B.&#x20;**`remove()`

### **Definition**

Removes an HTML element from the DOM.

HTML:

```
<li id="student">Rahul</li>
```

JavaScript:

```
let student = document.querySelector("#student");

student.remove();
```

The student element disappears from the webpage.

### **Real-time use**

- Delete a todo task
- Remove a product from a cart
- Delete a notification
- Remove a comment

# **9.&#x20;**`addEventListener()`

### **Definition**

`addEventListener()` is used to **listen for user actions or browser events and execute JavaScript code when that event occurs**.

### **Syntax**

```
element.addEventListener("event", function () {
    // Code to execute
});
```

### **Real-time example: Button click**

HTML:

```
<button id="button">Click Me</button>
```

JavaScript:

```
let button = document.querySelector("#button");

button.addEventListener("click", function () {
    alert("Button clicked!");
});
```

When the user clicks the button, the function executes.

### **Common events used in development**

| Event       | When it occurs              |
| ----------- | --------------------------- |
| `click`     | User clicks an element      |
| `input`     | User types or changes input |
| `submit`    | User submits a form         |
| `change`    | Input value changes         |
| `keydown`   | User presses a keyboard key |
| `mouseover` | Mouse moves over an element |
| `mouseout`  | Mouse leaves an element     |

### **Real-time example: Live search**

HTML:

```
<input type="text" id="search" placeholder="Search products">

<p id="result"></p>
```

JavaScript:

```
let search = document.querySelector("#search");
let result = document.querySelector("#result");

search.addEventListener("input", function () {
    result.innerText = search.value;
});
```

When the user types, the result updates immediately.

# **10.&#x20;**`event.target`**&#x20;and&#x20;**`preventDefault()`

These are important when handling events.

## **A.&#x20;**`event.target`

### **Definition**

`event.target` identifies **the actual HTML element on which the event occurred**.

### **Real-time example**

HTML:

```
<button id="button">Click Me</button>
```

JavaScript:

```
let button = document.querySelector("#button");

button.addEventListener("click", function (event) {
    console.log(event.target);
});
```

When the button is clicked, `event.target` refers to the clicked button.

### **Real-time use**

Suppose you have multiple buttons:

```
<button>Delete 1</button>
<button>Delete 2</button>
<button>Delete 3</button>
```

You can identify which button was clicked.

```
document.querySelectorAll("button").forEach(function (button) {

    button.addEventListener("click", function (event) {

        console.log("Clicked button:", event.target);

    });

});
```

## **B.&#x20;**`preventDefault()`

### **Definition**

`preventDefault()` is used to **prevent the browser's default behavior for an event**.

### **Real-time example: Form submission**

Normally, when a form is submitted, the browser may reload the page or navigate to another URL.

HTML:

```
<form id="loginForm">

    <input type="text" id="username" placeholder="Username">

    <button type="submit">Login</button>

</form>
```

JavaScript:

```
let form = document.querySelector("#loginForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log("Form submitted");

});
```

### **What happens?**

Normally:

```
User clicks Submit
       ↓
Browser performs default form submission
       ↓
Page may reload
```

With `preventDefault()`:

```
User clicks Submit
       ↓
JavaScript receives submit event
       ↓
preventDefault()
       ↓
Browser's default submission is stopped
       ↓
JavaScript handles the form
```

### **Real-time use**

- Login forms
- Registration forms
- Search forms
- AJAX requests
- Form validation
- SPA applications

# **Final DOM Concepts — Quick Revision**

| Concept              | Definition                            | Real-world use           |
| -------------------- | ------------------------------------- | ------------------------ |
| `querySelector()`    | Selects first matching element        | Select a button          |
| `querySelectorAll()` | Selects all matching elements         | Select all product cards |
| `innerText`          | Reads/changes visible text            | Update button text       |
| `textContent`        | Reads/changes text content            | Display messages         |
| `innerHTML`          | Reads/changes HTML content            | Dynamically render HTML  |
| `value`              | Gets/sets input value                 | Login form               |
| `getAttribute()`     | Gets attribute value                  | Get image URL            |
| `setAttribute()`     | Changes attribute value               | Change image URL         |
| `style`              | Changes CSS directly                  | Hide/show elements       |
| `classList`          | Manipulates CSS classes               | Dark mode                |
| `createElement()`    | Creates HTML elements                 | Create product cards     |
| `append()`           | Adds content/elements                 | Add todo task            |
| `remove()`           | Removes element                       | Delete todo task         |
| `addEventListener()` | Listens for events                    | Button click             |
| `event.target`       | Identifies the event's target element | Identify clicked button  |
| `preventDefault()`   | Stops default browser behavior        | Prevent form reload      |

## **The most important real-world DOM workflow**

```
// 1. Select an element
let button = document.querySelector("#button");

// 2. Listen for user action
button.addEventListener("click", function (event) {

    // 3. Get user input
    let input = document.querySelector("#input");

    // 4. Create a new element
    let paragraph = document.createElement("p");

    // 5. Add content
    paragraph.innerText = input.value;

    // 6. Add element to webpage
    document.querySelector("#container").append(paragraph);

    // 7. Clear input
    input.value = "";

});
```

This pattern is the **foundation of interactive JavaScript webpages**:

**Select → Listen → Get Data → Manipulate → Update DOM**

For modern frontend development, these are the DOM concepts worth understanding well before moving to React or other frontend frameworks.
                     
                              EVENTS IN JS
                              Phase 1: Core Concepts
1. What is an Event?
2. What is Event Handling?
3. How JavaScript responds to user interactions
4. Common Events


Phase 2: Event Listeners
1. addEventListener()
2. Event listener syntax
3. Passing functions
4. Anonymous and named functions
5. removeEventListener()

Phase 3: Event Object
1. Event Object
2. event.target
3. event.currentTarget
4. event.type
5. preventDefault()
6. stopPropagation()
7. Keyboard properties

Phase 4: Event Propagation
1. Event Propagation
2. Event Bubbling
3. Event Capturing
4. Event propagation order

Phase 5: Event Delegation
1. Event Delegation
2. event.target
3. closest()
4. Dynamic elements
5. Real-world applications

Phase 6: Form Events
1. submit
2. input
3. change
4. focus
5. blur
6. Form validation

Phase 7: Advanced Concepts
1. Debouncing
2. Throttling
3. Event listener performance
4. Memory leaks
5. Best practices
                               
                               Class and Objects
# **Classes and Objects in JavaScript**

Let's learn **Classes and Objects in JavaScript** from the basics, with simple definitions, practical examples, and complete code that you can run.

Since you're learning JavaScript for real-world development, I'll focus on **how classes and objects are actually used in applications**, rather than just theory.

## **1. What is an Object?**

An **object** is a collection of properties and methods that represent a real-world entity.

- **Properties** → Data or information about an object.
- **Methods** → Functions or actions that an object can perform.

### **Real-world example**

Imagine a student:

| Property | Value            |
| -------- | ---------------- |
| name     | Rahul            |
| age      | 21               |
| course   | Computer Science |

Actions the student can perform:

- Study
- Attend class
- Write exams

In JavaScript, we can represent this using an object.

```
const student = {
    name: "Rahul",
    age: 21,
    course: "Computer Science",

    study() {
        console.log(`${this.name} is studying`);
    }
};

console.log(student.name);
console.log(student.age);

student.study();
```

### **Output**

```
Rahul
21
Rahul is studying
```

Here:

```
name: "Rahul"
```

is a property.

And:

```
study() {
    console.log(`${this.name} is studying`);
}
```

is a method.

## **2. What is a Class?**

A **class is a blueprint or template used to create objects.**

Imagine you are developing a student management application.

You need to create hundreds of student objects:

```
const student1 = {
    name: "Rahul",
    age: 21,
    course: "Python"
};

const student2 = {
    name: "Priya",
    age: 22,
    course: "Java"
};

const student3 = {
    name: "Amit",
    age: 20,
    course: "JavaScript"
};
```

Notice the problem: every time we create a student, we have to write the same structure again.

This is repetitive code.

Instead, we can create a **class** that acts as a blueprint for all students.

Blueprint

**Student Class**

- Name
- Age
- Course
- Study()
- DisplayDetails()

**Student 1**

Rahul

21 years

**Student 2**

Priya

22 years

**Student 3**

Amit

20 years

The class defines the structure, and objects are created from that structure.

## **3. How to Create a Class in JavaScript**

### **Syntax**

```
class ClassName {

}
```

Example:

```
class Student {

}
```

Here, `Student` is a class.

However, this class currently contains nothing.

Let's add properties and methods.

## **4. The&#x20;**`constructor()`**&#x20;Method**

The `constructor()` is a special method that automatically executes when we create a new object from a class.

It is commonly used to initialize the object's properties.

### **Example**

```
class Student {

    constructor(name, age, course) {

        this.name = name;
        this.age = age;
        this.course = course;

    }

}
```

Let's understand this carefully.

### **What is&#x20;**`constructor`**?**

```
constructor(name, age, course)
```

It receives values when an object is created.

### **What is&#x20;**`this`**?**

`this` refers to the **current object being created or used**.

```
this.name = name;
```

The left side:

```
this.name
```

represents the object's property.

The right side:

```
name
```

represents the value received from the constructor parameter.

Therefore:

```
this.name = name;
```

means:

> Store the received name inside the current object's name property.

Similarly:

```
this.age = age;
this.course = course;
```

## **5. Creating Objects Using a Class**

Now we have our class.

```
class Student {

    constructor(name, age, course) {

        this.name = name;
        this.age = age;
        this.course = course;

    }

}
```

To create objects from this class, we use the `new` keyword.

```
const student1 = new Student("Rahul", 21, "Python");

const student2 = new Student("Priya", 22, "Java");

const student3 = new Student("Amit", 20, "JavaScript");
```

### **Complete code**

```
class Student {

    constructor(name, age, course) {

        this.name = name;
        this.age = age;
        this.course = course;

    }

}

const student1 = new Student("Rahul", 21, "Python");

const student2 = new Student("Priya", 22, "Java");

const student3 = new Student("Amit", 20, "JavaScript");

console.log(student1);
console.log(student2);
console.log(student3);
```

### **Output**

```
Student {
    name: "Rahul",
    age: 21,
    course: "Python"
}

Student {
    name: "Priya",
    age: 22,
    course: "Java"
}

Student {
    name: "Amit",
    age: 20,
    course: "JavaScript"
}
```

Each object has its own data.

```
student1.name  // Rahul
student2.name  // Priya
student3.name  // Amit
```

But all three objects were created using the same class.

## **6. What is the&#x20;**`new`**&#x20;Keyword?**

The `new` keyword is used to create a new object from a class.

```
const student1 = new Student("Rahul", 21, "Python");
```

Conceptually, JavaScript performs these steps:

1. Creates a new empty object.
2. Connects the object to the class's prototype.
3. Executes the constructor.
4. Assigns the object's properties.
5. Returns the newly created object.

You don't need to manually perform these steps.

Just remember:

```
new ClassName(arguments);
```

creates a new object from a class.

## **7. Methods Inside a Class**

A class can contain methods that define the actions objects can perform.

### **Example**

```
class Student {

    constructor(name, age, course) {

        this.name = name;
        this.age = age;
        this.course = course;

    }

    study() {
        console.log(`${this.name} is studying ${this.course}`);
    }

    attendClass() {
        console.log(`${this.name} is attending the class`);
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Course: ${this.course}`);
    }

}

const student1 = new Student("Rahul", 21, "Python");

student1.study();
student1.attendClass();
student1.displayDetails();
```

### **Output**

```
Rahul is studying Python
Rahul is attending the class
Name: Rahul
Age: 21
Course: Python
```

### **Important**

We call methods using the object name:

```
student1.study();
```

Not:

```
Student.study();
```

Because `study()` is an **instance method**, meaning it belongs to objects created from the class.

## **8. Understanding&#x20;**`this`**&#x20;with Multiple Objects**

This is one of the most important concepts.

```
class Student {

    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
    }

}

const student1 = new Student("Rahul");
const student2 = new Student("Priya");

student1.introduce();
student2.introduce();
```

### **Output**

```
My name is Rahul
My name is Priya
```

Why does the same method produce different output?

Because:

```
student1.introduce();
```

Inside the method:

```
this.name
```

refers to:

```
student1.name
```

And when we call:

```
student2.introduce();
```

`this.name` refers to:

```
student2.name
```

### **Simple rule**

| Method called using    | `this` refers to |
| ---------------------- | ---------------- |
| `student1.introduce()` | `student1`       |
| `student2.introduce()` | `student2`       |
| `employee1.display()`  | `employee1`      |

## **9. Real-Time Example: Employee Management System**

Let's create a class that represents employees in a company.

Each employee has:

- Employee ID
- Name
- Department
- Salary

And each employee can:

- Display details
- Get a salary increment
- Display updated salary

### **Complete code**

```
class Employee {

    constructor(id, name, department, salary) {

        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;

    }

    displayDetails() {

        console.log("Employee ID:", this.id);
        console.log("Name:", this.name);
        console.log("Department:", this.department);
        console.log("Salary:", this.salary);

    }

    increaseSalary(amount) {

        this.salary = this.salary + amount;

        console.log(`${this.name}'s salary increased by ${amount}`);

    }

    displaySalary() {

        console.log(`Current Salary: ${this.salary}`);

    }

}

const employee1 = new Employee(
    101,
    "Rahul",
    "Backend Development",
    30000
);

const employee2 = new Employee(
    102,
    "Priya",
    "Frontend Development",
    35000
);

employee1.displayDetails();

console.log("----------------");

employee1.increaseSalary(5000);

employee1.displaySalary();
```

### **Output**

```
Employee ID: 101
Name: Rahul
Department: Backend Development
Salary: 30000

----------------

Rahul's salary increased by 5000

Current Salary: 35000
```

### **What happened here?**

Initially:

```
employee1.salary = 30000;
```

Then we called:

```
employee1.increaseSalary(5000);
```

Inside the method:

```
this.salary = this.salary + amount;
```

This becomes:

```
30000 + 5000
```

Therefore:

```
employee1.salary = 35000;
```

The object's data is modified.

This is how objects can maintain their own state.

## **10. Object State**

**State refers to the current values of an object's properties.**

For example:

```
const employee1 = new Employee(101, "Rahul", "Backend", 30000);
```

The current state is:

```
ID: 101
Name: Rahul
Department: Backend
Salary: 30000
```

After:

```
employee1.increaseSalary(5000);
```

The state changes:

```
ID: 101
Name: Rahul
Department: Backend
Salary: 35000
```

The object's state has changed.

This concept is extremely important in application development.

Examples:

- Shopping cart → items and total price
- Bank account → balance
- User → name, email, login status
- Game character → health, score, level
- Employee → salary, department

## **11. Why Do We Use Classes?**

Imagine building an application without classes.

```
const employee1 = {
    name: "Rahul",
    salary: 30000
};

const employee2 = {
    name: "Priya",
    salary: 35000
};

const employee3 = {
    name: "Amit",
    salary: 40000
};
```

You need to create 1,000 employees.

Writing this structure repeatedly is inefficient.

Instead:

```
class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

}

const employee1 = new Employee("Rahul", 30000);
const employee2 = new Employee("Priya", 35000);
const employee3 = new Employee("Amit", 40000);
```

Now you can create as many employees as you want using the same blueprint.

### **Benefits of classes**

| Benefit         | Explanation                                        |
| --------------- | -------------------------------------------------- |
| Code reuse      | Reuse the same structure                           |
| Organization    | Keep related data and functions together           |
| Maintainability | Change the class instead of modifying many objects |
| Scalability     | Easily create hundreds or thousands of objects     |
| Encapsulation   | Organize data and behavior together                |

## **12. Class vs Object**

This is a very important interview question.

| Class                                    | Object                                |
| ---------------------------------------- | ------------------------------------- |
| Blueprint or template                    | Instance created from a blueprint     |
| Defines properties and methods           | Contains actual values                |
| Does not represent a specific individual | Represents a specific entity          |
| Example: `Student`                       | Example: `student1`                   |
| Used to create objects                   | Used to access properties and methods |

### **Example**

```
class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

const student1 = new Student("Rahul", 21);
```

Here:

```
Student
```

is the **class**.

```
student1
```

is the **object**.

```
new Student("Rahul", 21)
```

creates the object.

## **13. Multiple Objects from One Class**

One class can create many objects.

```
class Car {

    constructor(brand, model, color) {

        this.brand = brand;
        this.model = model;
        this.color = color;

    }

    start() {
        console.log(`${this.brand} ${this.model} is starting`);
    }

}

const car1 = new Car("Toyota", "Fortuner", "Black");

const car2 = new Car("Honda", "City", "White");

const car3 = new Car("BMW", "X5", "Blue");

car1.start();
car2.start();
car3.start();
```

### **Output**

```
Toyota Fortuner is starting
Honda City is starting
BMW X5 is starting
```

All objects have the same structure but different values.

## **14. Objects Are Independent**

Each object created from a class has its own properties.

```
class BankAccount {

    constructor(accountHolder, balance) {

        this.accountHolder = accountHolder;
        this.balance = balance;

    }

    deposit(amount) {
        this.balance += amount;
    }

}

const account1 = new BankAccount("Rahul", 10000);

const account2 = new BankAccount("Priya", 20000);

account1.deposit(5000);

console.log(account1.balance);
console.log(account2.balance);
```

### **Output**

```
15000
20000
```

When we modify `account1`, `account2` is not affected.

Why?

Because each object has its own independent property values.

## **15. Real-Time Example: Shopping Cart**

This is a practical example of classes and objects.

Imagine an e-commerce application.

A shopping cart needs to:

- Store products
- Add products
- Remove products
- Calculate total price
- Display cart contents

### **Complete code**

```
class ShoppingCart {

    constructor() {

        this.products = [];

    }

    addProduct(name, price) {

        const product = {
            name: name,
            price: price
        };

        this.products.push(product);

        console.log(`${name} added to cart`);

    }

    removeProduct(name) {

        this.products = this.products.filter(
            product => product.name !== name
        );

        console.log(`${name} removed from cart`);

    }

    calculateTotal() {

        let total = 0;

        for (const product of this.products) {

            total += product.price;

        }

        return total;

    }

    displayCart() {

        console.log("Shopping Cart:");

        for (const product of this.products) {

            console.log(`${product.name} - ₹${product.price}`);

        }

        console.log("Total:", this.calculateTotal());

    }

}

const cart1 = new ShoppingCart();

cart1.addProduct("Laptop", 50000);
cart1.addProduct("Mouse", 1000);
cart1.addProduct("Keyboard", 2000);

cart1.displayCart();

cart1.removeProduct("Mouse");

cart1.displayCart();
```

### **Output**

```
Laptop added to cart
Mouse added to cart
Keyboard added to cart

Shopping Cart:

Laptop - ₹50000
Mouse - ₹1000
Keyboard - ₹2000

Total: 53000

Mouse removed from cart

Shopping Cart:

Laptop - ₹50000
Keyboard - ₹2000

Total: 52000
```

### **Why is this useful?**

Instead of having separate functions and variables scattered throughout your application, the shopping cart's:

- Data
- Logic
- Methods

are organized inside one class.

This is a common pattern in object-oriented programming.

## **16. Constructor with Default Values**

Sometimes you don't want to provide every value when creating an object.

JavaScript allows default values in constructor parameters.

```
class User {

    constructor(name, role = "User") {

        this.name = name;
        this.role = role;

    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Role: ${this.role}`);
    }

}

const user1 = new User("Rahul", "Admin");

const user2 = new User("Priya");

user1.display();
user2.display();
```

### **Output**

```
Name: Rahul
Role: Admin

Name: Priya
Role: User
```

Here:

```
role = "User"
```

means:

> If no role is provided, use `"User"` as the default value.

## **17. Static Methods**

A normal method belongs to objects created from the class.

A **static method belongs to the class itself**.

### **Example**

```
class Calculator {

    static add(a, b) {
        return a + b;
    }

}

console.log(Calculator.add(10, 20));
```

### **Output**

```
30
```

Notice:

```
Calculator.add(10, 20);
```

We call the method using the class name.

We don't need to create an object.

```
const calculator = new Calculator();
```

And normally, we cannot call a static method through an instance:

```
calculator.add(10, 20); // Error
```

### **When are static methods useful?**

They are useful when a function is related to the class but doesn't need individual object data.

Examples:

- Utility calculations
- Validation functions
- Helper methods
- Factory methods

## **18. Complete Example: User Class**

Let's combine everything we've learned.

```
class User {

    constructor(name, email, age) {

        this.name = name;
        this.email = email;
        this.age = age;

    }

    displayDetails() {

        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Age:", this.age);

    }

    updateEmail(newEmail) {

        this.email = newEmail;

        console.log("Email updated successfully");

    }

    isAdult() {

        return this.age >= 18;

    }

}

const user1 = new User(
    "Rahul",
    "rahul@gmail.com",
    21
);

const user2 = new User(
    "Priya",
    "priya@gmail.com",
    17
);

user1.displayDetails();

user1.updateEmail("rahul123@gmail.com");

console.log(user1.isAdult());
console.log(user2.isAdult());
```

### **Output**

```
Name: Rahul
Email: rahul@gmail.com
Age: 21

Email updated successfully

true
false
```

This class has:

| Concept     | Example                         |
| ----------- | ------------------------------- |
| Class       | `User`                          |
| Constructor | `constructor(name, email, age)` |
| Properties  | `name`, `email`, `age`          |
| Object      | `user1`, `user2`                |
| Method      | `displayDetails()`              |
| Method      | `updateEmail()`                 |
| Method      | `isAdult()`                     |
| `this`      | Refers to the current object    |
| `new`       | Creates a new object            |

## **19. How Classes Are Used in Real Applications**

Classes can represent almost anything in software.

**Banking Application**

`BankAccount`

- Balance
- Account number
- Deposit()
- Withdraw()

**E-commerce**

`ShoppingCart`

- Products
- AddProduct()
- RemoveProduct()
- CalculateTotal()

**User Management**

`User`

- Name
- Email
- Login()
- Logout()

**Game Development**

`Player`

- Health
- Score
- Move()
- Attack()

## **20. The Most Important Mental Model**

Remember this:

```
class Student {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

    study() {
        console.log(`${this.name} is studying`);
    }

}
```

This is the **blueprint**.

Now:

```
const student1 = new Student("Rahul", 21);
const student2 = new Student("Priya", 22);
```

These are **objects created from the blueprint**.

```
student1.study();
student2.study();
```

These objects can use the methods defined inside the class.

### **Visual understanding**

**Class: Student**

Blueprint

Name

Age

Study()

Creates objects using `new`

**student1**

Name: Rahul

Age: 21

**student2**

Name: Priya

Age: 22

## **21. Interview Definition**

**What is a class in JavaScript?**

> A class in JavaScript is a blueprint used to create objects. It defines the properties and methods that objects created from that class can have. The constructor initializes the object's properties, and the `new` keyword is used to create instances of the class.

**What is an object?**

> An object is an instance of a class that contains properties representing its data and methods representing its behavior.

**What is a constructor?**

> A constructor is a special method that automatically executes when a new object is created from a class. It is used to initialize the object's properties.

**What is&#x20;**`this`**?**

> The `this` keyword refers to the current object in the context of an instance method.

## **22. Practice Questions**

Try these without looking at the examples.

### **Practice 1: Product Class**

Create a class called `Product` containing:

- `name`
- `price`
- `quantity`

Create a method:

```
displayProduct()
```

Create three product objects.

### **Practice 2: Bank Account**

Create a class called `BankAccount`.

Properties:

- Account holder
- Balance

Methods:

```
deposit(amount)
withdraw(amount)
displayBalance()
```

The `withdraw()` method should not allow withdrawal if the balance is insufficient.

### **Practice 3: Student**

Create a class called `Student`.

Properties:

- Name
- Marks

Methods:

```
displayMarks()
checkResult()
```

`checkResult()` should return:

- `"Pass"` if marks are greater than or equal to 35
- `"Fail"` otherwise

### **Your learning order for Classes and Objects**

1. Object
2. Class
3. `constructor()`
4. `this`
5. `new` keyword
6. Properties
7. Methods
8. Creating multiple objects
9. Object state
10. Static methods

**The most important concepts to master first are&#x20;**`class`**,&#x20;**`constructor`**,&#x20;**`this`**,&#x20;**`new`**, properties, and methods.**

Once these six concepts become clear, classes and objects will become much easier.


                                   Callback and Promises
Understood. You want **only the important concepts first**, without lengthy explanations.

# **Callbacks, Promises & Async/Await — Important Concepts**

| No. | Concept                                    | What you need to learn                                    |
| --- | ------------------------------------------ | --------------------------------------------------------- |
| 1   | **Synchronous vs Asynchronous JavaScript** | Difference between synchronous and asynchronous execution |
| 2   | **Callback Functions**                     | Passing a function as an argument and executing it later  |
| 3   | **Callback Hell**                          | Nested callbacks and why they become difficult to manage  |
| 4   | **Promises**                               | What a Promise is and how it works                        |
| 5   | **Promise States**                         | `pending`, `fulfilled`, `rejected`                        |
| 6   | `resolve()`**&#x20;and&#x20;**`reject()`   | Completing or failing a Promise                           |
| 7   | `.then()`                                  | Handling successful Promise results                       |
| 8   | `.catch()`                                 | Handling errors                                           |
| 9   | `.finally()`                               | Executing code regardless of success or failure           |
| 10  | **Promise Chaining**                       | Connecting multiple asynchronous operations               |
| 11  | `async`                                    | Creating asynchronous functions                           |
| 12  | `await`                                    | Waiting for Promise results                               |
| 13  | `try...catch`**&#x20;with Async/Await**    | Error handling in asynchronous code                       |
| 14  | **Fetch API**                              | Fetching data from APIs                                   |
| 15  | `Promise.all()`                            | Running multiple Promises concurrently                    |

### **Recommended learning order**

**Synchronous vs Asynchronous**\
↓\
**Callbacks**\
↓\
**Callback Hell**\
↓\
**Promises**\
↓\
**Promise States**\
↓\
**resolve & reject**\
↓\
**then, catch, finally**\
↓\
**Promise Chaining**\
↓\
**async & await**\
↓\
**try...catch**\
↓\
**Fetch API**\
↓\
**Promise.all()**

We can now learn **one concept at a time**, with a simple definition and one complete real-time code example—without unnecessary explanation.


# **Fetch API — Important Concepts to Learn**

## **Concepts**

| No. | Concept                    | What you should know                             |
| --- | -------------------------- | ------------------------------------------------ |
| 1   | **What is Fetch API?**     | Used to send and receive data from servers/APIs  |
| 2   | `fetch()`                  | How to make an HTTP request                      |
| 3   | **URL**                    | Where the API endpoint is located                |
| 4   | **Request**                | Data sent from frontend to backend               |
| 5   | **Response**               | Data received from backend                       |
| 6   | **HTTP Methods**           | `GET`, `POST`, `PUT`, `PATCH`, `DELETE`          |
| 7   | **Response Object**        | Understanding the response returned by `fetch()` |
| 8   | `response.json()`          | Converting API response into JavaScript data     |
| 9   | **Request Options**        | `method`, `headers`, `body`                      |
| 10  | **Headers**                | Sending information such as content type         |
| 11  | **Sending Data**           | Using `JSON.stringify()` to send data            |
| 12  | **Error Handling**         | Handling network errors using `try...catch`      |
| 13  | `response.ok`              | Checking whether the HTTP request succeeded      |
| 14  | **Async/Await with Fetch** | Using `await` to handle API requests             |
| 15  | **Fetch with DOM**         | Displaying API data on a webpage                 |

## **Real-Time Use Cases**

| Use Case            | What Fetch API Does                      |
| ------------------- | ---------------------------------------- |
| Login               | Sends username and password to backend   |
| Registration        | Sends user registration data             |
| Product listing     | Retrieves products from server           |
| Search              | Fetches search results                   |
| Weather application | Retrieves weather data from an API       |
| Dashboard           | Retrieves statistics and user data       |
| CRUD application    | Creates, reads, updates and deletes data |
| Pagination          | Fetches the next page of data            |

### **Recommended Learning Order**

**1. What is Fetch API?**\
↓\
**2.&#x20;**`fetch()`**&#x20;syntax**\
↓\
**3. GET request**\
↓\
**4. Response object**\
↓\
**5.&#x20;**`response.json()`\
↓\
**6. Async/Await with Fetch**\
↓\
**7. Error handling**\
↓\
**8. HTTP methods**\
↓\
**9. Request options (**`method`**,&#x20;**`headers`**,&#x20;**`body`**)**\
↓\
**10. POST request**\
↓\
**11. PUT/PATCH request**\
↓\
**12. DELETE request**\
↓\
**13. Display API data in HTML using DOM**

We can learn these **one by one**, using short definitions and complete real-world code examples.

                            ---Completed---- 