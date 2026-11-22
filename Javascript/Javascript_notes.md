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

