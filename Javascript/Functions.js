// define function
// function myfunction(){
//     console.log("I am function");
// }
// Calling function
// myfunction();

// function even_odd(){
//     let num = 12;
//     if(num % 2 == 0)
//     {
//         console.log("even");
//     }
//     else
//     {
//         console.log("odd");
//     }
// }
// even_odd();

// function sum_of_num(){
//     let num1 = 12;
//     let num2 = 13;
//     let sum_1 = num1 + num2;
//     return sum_1;
// }
// let value = sum_of_num()
// console.log(value);
// Note If we write the code after return function it will never exicutes

// Loops in Function
// function numbers() {
//     let num5 = [12, 13, 15, 16];

//     for (let i = 0; i < num5.length; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// }

// numbers();
// Arrow Functions
// An Arrow Function is a shorter and modern way of writing functions in JavaScript. It was introduced in ES6 (ECMAScript 2015).

// Arrow functions are especially useful when writing:
//- Short functions
//- Callback functions
//- Array methods (map, filter, forEach)
//- Event handlers
//- Asynchronous code

// Normal Function
function add(a,b){
    return a+b;
}
console.log(add(1,2));

// Arrow Function
const add1 = (a,b) => {
    return a+b;
};
console.log(add1(10,11));

let even_odd = (a) =>{
    if(a % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(even_odd(12));

//for each Loop in Arrays
//Definition: forEach() is an array method that executes a function once for each element in an array.

//Why do we use forEach() in JavaScript?
//We use forEach() to perform an operation on every element of an array without writing a traditional for loop.
let arr = [1,2,3,4,5];
arr.forEach(function myFunction(val){
  console.log(val);  
});

//for each using arrow 
let numbers1 = [1,2,3,4,5,6,7];
numbers1.forEach(numbers1 =>{
    console.log(numbers1);
})

