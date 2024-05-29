console.log("2" > 1);// True
console.log("02" > 1);// True

console.log(null > 0); // False
console.log(null == 0);// False
console.log(null >= 0);// True

console.log(undefined > 0); // False
console.log(undefined == 0);// False
console.log(undefined >= 0);// False

/* Strict Check : === [It checks the value with the data type also*/
console.log("2" === 2); // False

//Use Strict Comparision When Neccessary