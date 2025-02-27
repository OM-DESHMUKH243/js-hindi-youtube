const accountId = 144553
let accountEmail = "om@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "om@om.com"
accountPassword = "21212121"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scopre and function scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
