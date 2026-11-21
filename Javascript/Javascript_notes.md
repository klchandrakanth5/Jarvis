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

