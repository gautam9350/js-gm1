const accId = 1011
let accEmail  = "gm12@gmail,com"
var accPass = "1234"
/*
we will prefer not to use var 
because of issue in block scope and functional scope 
*/
accCity = "Jaipur"// we can use it   but prefer to use 👉let
console.log(accId);
console.table([accId,accEmail,accPass,accCity])
