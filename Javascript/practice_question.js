const product = {
    "item":"Pen",
    "price":270,
    "color":"Black",
    "offer":5,
    "rating":4
};
console.log(product["item"]);
console.log(typeof(product));

const profile ={
    "username":"Shradhakapra",
    "post":195,
    "followers":559,
    "following":4,
    "email":"shradhakapra@gmail.com",
    "expirence":"Apna College | Ex:- Microsoft,DRDO",

};
console.log(profile["username"]);

let number = prompt("Enter the number :\n");
if(number % 5 == 0)
{
    console.log("Divisible");
}
else{
    console.log("Not divisible");
}