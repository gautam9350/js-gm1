

// Falsy Value
//❤️❤️ false, 0,-0,BigInt ,0n, "" ,null ,undefine, NaN

// truthy Value
//  "0",'false', " " ,{},[],function(){},


const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}


// Nullish Coalesing Operator (??) : null , undefine  
let val1 ;
//val1 = 5 ?? 10
// val1 = null?? 11
// val1 = undefined ?? 15
val1 = null ?? 17 ??20
console.log(val1);

// Terniary Operator
// condition ? true:false
const age = 17 
age >=18 ? console.log("yes you can Vote ") : console.log("You are not eligible to vote ")





