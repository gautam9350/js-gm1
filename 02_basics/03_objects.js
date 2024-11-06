//singleton

mysym = Symbol("key1")
const jsUser = {
    name:"gautam",
    age :20 ,
     occupation : "student",
     locaton : "Delhi",
     [mysym] : "mykey1",//use square bracket for symbol key
     my_email : "gm@123"
}

// console.log(jsUser.my_emailemail)
// console.log(jsUser["my_email"])
// console.log(jsUser['name'])
// console.log( jsUser[mysym])//mykey1


//to change overwrite with =
jsUser.my_email= "gautamk9359@gmail.com"

//to freeze an object
// Object.freeze(jsUser)

// jsUser.my_email= "piyuish9359@gmail.com"
// console.log(jsUser)
 
jsUser.greeting = function(){
    console.log("Hello js useer")
}
jsUser.greetingTwo = function(){
    console.log(`Hello js useer,${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())//Hello js useer,gautam















