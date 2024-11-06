const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id===anotherid) //false
const bigInt= 85758720754875n

//Reference (Non Primitive)
// 👉Arrays , Objects  , Functionsl

const name = ["Gautam","Piyush","Krish","Niraj"];
// anything inside {} are object 👉 no need to store it inside any variable

let myObj={
    name : "gautam",
    age : 20,

}
 const myFunction = function(){
    console.log("Hello World")
 }
 // to find its type
  console.log(typeof id);

  //————————————————————————————————————————————————————————————————————————————————————
  //Stack Memory(Primitive)  ,  Heap Memory (Non Primitive)
  
  let myName = "Gautam"
  let anotherName = myName
  console.log(anotherName)
  anotherName = "Piyush"
  console.log(anotherName)


  let userOne = {
    email: "gm@123.com",
    upi:"8683@paytm"

  }
  let userTwo = userOne
  userTwo.email = "pr@321"
  console.log(userOne.email)
  console.log(userTwo.email)