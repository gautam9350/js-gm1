const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const otherNumber = 123.896
console.log(otherNumber.toPrecision(3))
const hundreds = 100000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))
//________________________________Maths________________________________________________________
console.log(Math);
console.log(Math.abs(6));//absolute
console.log(Math.round(6.6));//roundoff
console.log(Math.ceil(6.6));//top value
console.log(Math.floor(6.6));//buttom value
console.log(Math.min(6,5,7,8,));//min value
console.log(Math.max(6,5,7,8,));//max value

console.log(Math.random())
console.log(Math.random()*10)
console.log((Math.random()*10)+1)//to remove 0 as output
console.log(Math.floor(Math.random()*10)+1)