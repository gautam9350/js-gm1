//Arrays
const arr = [1,2,3,4,55,]; //2
//console.log(arr[1])
//const myFriends = ["piyush","gautam","abhishek","niraj"]// abhishek
//console.log(myFriends[2])

const myarr = new Array(1,2,3,4,5,6)

// --------------Arrays Method-------------------
// myarr.push(7)
// myarr.pop()// last elament out 
// myarr.unshift(0)//adds element to start
// myarr.shift()   //removes first element
// console.log(myarr.includes(9)) //states a specific element is present or not
// console.log(myarr.indexOf(9)) // states index of an element (if not present then gives 👉-1 )
// console.log(myarr.indexOf(5)) //
//console.log(myarr) 
//const newArr = myarr.join() // converts  its datatype to string
//console.log(newArr)

// Slice  &  splice
console.log("A ",myarr)

const myn1 =myarr.slice(1,3) //prints some  copied portion of arrays and 👉exclude last (range)
console.log("B ",myn1)
const myn2 =myarr.splice(1,3) // takes out some  portion of array 👉also include last (range)
console.log(myarr)









