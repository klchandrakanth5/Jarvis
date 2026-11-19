// We have two types of Data Types 1.Primitive 2.Non - Primitive 

//Primitive(7)
// 1. Numbers 2. String 3.Boolean 4.Undefined 5. null 6.Bigint 7.Symbol 8.Symbol
let num  = 12;
console.log(typeof(num));
let name = "Ram";
console.log(typeof(name));
let isfollow = true;
console.log(typeof(isfollow));
let x;
console.log(typeof(x));
let x1 = null; // Means absences of object
console.log(typeof(x1));
let y = BigInt("123445");
console.log(typeof(y));
let h = Symbol("Hello");
console.log(typeof(h));

//Non - Primitives --> Arrays , Functions
// Objects -> Means collections of value

let student = {
    name : "Ram",
    age :20,
    cgpa:8.7,
    isPass:true
};
console.log(typeof(student));
// To access elements 
console.log(student.age);
console.log(student.isPass);
// To update values in students we can do like this 
student["age"] = 34;
console.log(student);
student["name"] = "Sham";
console.log(student);