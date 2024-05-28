let score = "33abc";
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);// NaN - Not a Number

/*when we defined null let say*/ 
let score2 = null
let anotherVariable = Number(score2);
console.log(anotherVariable); // This will give me the output 0

/*when we defined undefined let say*/
let score3 = undefined
let anotherVariable2 = Number(score3);
console.log(anotherVariable2); // This will give me the output NaN

/* 
"33" - 33
"33abc" - NaN
true - 1 
false - 0
*/

// when we want to convert number to the boolean 
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/* 
1 - true
0 - false
"" - false
"Gunjan" - true
*/

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));// Type of string