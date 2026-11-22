let marks = [10,20,30,40];
console.log(marks);
console.log(marks.length); // Property
// Arrays Indices
let marks1 = [10,20,30,40];
console.log(marks1[0]);
console.log(marks1[0,1]);
console.log(marks[1,2]);
console.log(marks[100]);
marks1[0] = 66; // Replaacing the values
console.log(marks1);

// Looping in Arrays
let name = ["Ironman","Batman","Hulk"];
// for (let idx = 0; idx<name.length; idx++)
// {
//     console.log(name[idx]);
// }

// for of loop
for(let ele of name)
{
    console.log(ele.toUpperCase());
}