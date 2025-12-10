
const accountId=1234
let name="Ashish"
var email="ashish@gmail.com"
var accountPass=8765
city="noida"

// This will throw an error because accountId is a constant
// accountId=2345 

// when you does not initilize `let` or `var` it will have the value `undefined`
let accountState;


//console.log("Account ID:", accountId)
console.table([accountId,name,email,accountPass,city,accountState])