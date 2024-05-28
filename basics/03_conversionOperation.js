let score = "33abc";
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);// NaN - Not a Number

/*when we defined null let say*/ 
let score2 = null
let anotherVariable = Number(score2);
// console.log(anotherVariable); // This will give me the output 0

/*when we defined undefined let say*/
let score3 = undefined
let anotherVariable2 = Number(score3);
// console.log(anotherVariable2); // This will give me the output NaN

/* 
"33" - 33
"33abc" - NaN
true - 1 
false - 0
*/

// when we want to convert number to the boolean 
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

/* 
1 - true
0 - false
"" - false
"Gunjan" - true
*/

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof(stringNumber));// Type of string


/* ----------------------------------Operations in JavaScript -------------------------------*/
let value = 3
let negativeValue = -value;
console.log(negativeValue); //This will give me the negative value that is '-3'

let str1 = "hello";
let str2 = " gunjan";
let str3 = str1 + str2;
console.log(str3); // output we will get hello gunjan

//Complex Situation
console.log("1" + 2); // output - 12
console.log(1 + "2"); // output - 12
console.log("1" + 2 + 2); // output - 122 full conversion in string
console.log(1 + 2 + "2"); // output - 32
console.log(+true); // output - 1
// console.log(true+);//not possible

//Prefix and Postfix incremental value operator
let gameCounter = 100
gameCounter++;
console.log(gameCounter);
++gameCounter
console.log(gameCounter);