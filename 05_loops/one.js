// console.log("gautam");
// for(let i = 1;i <= 10;i++){
//     console.log(i)
// }


// for of
//  const arr =[1,2,3,4,5,6]
//  for (const num of arr){
//     console.log(num);
//  }
//  const greetings = "Hello World"
//  for (const greet of greetings){
//     console.log(greet)
//  }
 //Map
 //cont apply for in loop because it is not  iterable
//  const map = new Map()
//  map.set('IN',"india")
//  map.set('USA',"United State of America")
//  console.log(map)
//______________________________
// for(const key of map){
//     console.log(key)
//}
//output
//[ 'IN', 'india' ]
//[ 'USA', 'United State of America' ]
//_______________________________
// for(const [key ,value] of map){
//     console.log(key, ':-',value)
//}
//output
//IN :- india
//USA :- United State of America
// const myObject = {
//     game1:"freefire",
//     game2:"BGMI",
//     game3:"Subway surf"
// }
// for(const [key , value] of myObject){//TypeError: myObject is not iterabl
//     console.log(key ,':-',value)
// }
//
// const myObject = {
//     game1:"freefire",
//     game2:"BGMI",
//     game3:"Subway surf"
// }
// for (const key in myObject){
//     console.log(`${key } is ${myObject[key]}`)
// }
//______________________________________________
// const friends = ["piyush","abhi","subhu","niraj","mansi"]
// for (const key in friends){
//     console.log (key)
// }
/*
output 
0
1
2
3
*/
//___________________________________________
// const coding = ["css","python","swift1"]
//  coding.forEach(function(item){
//     console.log(item)
// })
//____________________________
const coding = ["css5","python","swift1"]
// coding.forEach((items)=>{
//     console.log(items)
// })
// function printMe(items){
//     console.log(items)
// }
// coding.forEach(printMe)
//------------------------------
// coding.forEach((item,index,arr) =>{
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        langauageName:"javaScript",
        languageFileName:"js"
    },
    {
        langauageName:"python",
        languageFileName:"py"
    },
    {
        langauageName:"swift",
        languageFileName:"swiftApple"
    }
]
myCoding.forEach((item,index) =>{// can insert anything insted of item,index
    console.log(item.languageFileName,index)
})