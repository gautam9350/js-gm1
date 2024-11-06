function sayMyName (){
    console.log("G")
    console.log("a")
    console.log("u")
    console.log("t")
    console.log("a")
    console.log("m")
}
// sayMyName()
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
// addTwoNumbers(3,5)


// function addTwoNumbers(num1,num2){
//     let result= num1+num2
//     return result
//     console.log("gautam")//never executed bcz it is after return
// }
// const result = addTwoNumbers(8,7)
// console.log(result)

// function userLoggedInMessage(username = "sam"){//if sam is given as by default👉if pararmeter not given it will execuated
//     if(!username){
//         console.log("Please Enter a Username")
//         return
//     }
//     return`${username} Just logged in`
// }
// console.log(userLoggedInMessage("gautam"))//if not [passed valur] (outout "undefine just logged in")


// function calculateCartPrice(val1,val2,...num1){// ...num is used for passing multiple parameters 
//     return num1

// }
// console.log(calculateCartPrice(200,400,500,6060,2345))

const user ={
    username:"Gautam",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} And price is ${anyObject.price}`)
    
}
// handleObject(user)
handleObject({
    username:"sam",
    price:"465"
})


const myNewArray = [200,600,768,490]
function getMyArrays (geyArray){
    return geyArray[2]
    
}
console.log(getMyArrays(myNewArray))

