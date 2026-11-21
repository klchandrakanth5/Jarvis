let str = "Ram";
console.log(typeof(str));
// Inbuilt Properties 
// 1st Length
console.log(str.length);
//Accessing Elements 
console.log(str[0]);
console.log(str[1]);

// Template Litrals
// It is a way to have embedded expression in Strings
let sentence =`This is a template`;
console.log(sentence);
console.log(typeof(sentence));

let obj ={
    item:"pen",
    price : 10,
};
console.log("the cost of",obj.item,"is",obj.price);
 // So insted of writing like this we can use Template litrals means insted of using strings in console.log
 // we use Template litrals
let output = `the cost of ${obj.item} is ${obj.price} ruppers`;
console.log(output);

// String Interpolation
// To create strings by doing substitution of placeholders
 // 'string text ${expression}string text'

// Escape  character
console.log("Hello \n JS");
console.log("Hello\t JS");
// In escape charater it work as Single character

// String Methods
// String is immutable
let name = "Chinnu";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.trim());
let name1 = "0123456789";
console.log(name1.slice(1,3)); // returns part of string
console.log(name1.slice(0,1));
let res = name1.concat(name);
console.log(res);
let replace1 = "hello";
console.log(replace1.replace("h", "y"));
let charAt = "I love JS"; // Search the postion of character
console.log(charAt.charAt(0));

