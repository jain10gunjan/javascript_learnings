const accountId = 144553;
let accountEmail = "email@email.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState; //This will give undefined value when variable is declared only and no value is assigned

// accountId = 2; This is not allowed as using the 'const' variable
accountEmail = "hc@email.com";
accountPassword = "10";
accountCity = "Gwalior"
console.log(accountId);

/*Prefer not to use var because of the issue in block scope and the functional scope */

//console.table
console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);

