// Loops means Repeat the code again and again 

// For Loop 
// for(let count = 0 ; count<=100 ; count++)
// {
//     console.log("Backend");
// }

// let num = 1;
// while(num <= 5)
// {
//     console.log(num);
//     num++;
// }

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);

// for - of Loop -- > Used for string and Arrays does not used in objects
let name = "Apple";
for(let val of name){
    console.log(val);
}

// for - in loop it always return key
let student = {
    name:"Rahul",
    age:20,
    cgpa:7.8,
    isPass:true,
};
for(let i in student){
    console.log(i,student[i]);
}