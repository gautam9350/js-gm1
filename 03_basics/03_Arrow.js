const user = {
    username:"Gautam",
    price : 999,
    welcoomeMessage :function(){
        //this is used because it inside  objects only not in function
        console.log(` Hey ! ${this.username}, Welcome to the website`)
        console.log(this)
    }
}
// user.welcoomeMessage()
// user.username ="Manshi"
// user.welcoomeMessage()

// function chai(){
//     let username = "gautam"
//     console.log(this.username)// this will not work in function
// }
// chai()

// const chai = function(){
//     let username= "Piyush"
//     console.log(this.username) //also not work

// }
// chai()

// const chai = ()=>{
//     let username= "Piyush"
//     console.log(this.username) //also not work

// }
// chai()

// const chai = ()=>{
//     let username= "Piyush"
//     console.log(this) //also not work will give {}

// }
// chai()

// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }

const addTwo = (num1,num2)=>  (num1 + num2) // another form of above
//if  curly bracket is used then return key is must if not used
//of object is used then close them in parenthesis()  

console.log(addTwo(7,6))  