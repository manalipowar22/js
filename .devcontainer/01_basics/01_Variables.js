const accountId = 14453
let accountEmail = "Manali@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 not allowed 

accountEmail = "abc@gmail.com"
accountPassword = "12233445"
accountCity = "Kolhapur"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail,accountPassword,accountCity,accountState])
