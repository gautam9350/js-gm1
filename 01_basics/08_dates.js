let myDate = new Date()
// console.log(myDate.toString());      //  Wed Oct 23 2024 19:40:25 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  //  Wed Oct 23 2024
// console.log(myDate.toLocaleString());//  23/10/2024, 7:40:25 pm
// console.log(typeof myDate)           //  Object

let myCreatedDate = new Date(2023,0,26);
let myCreatedDate2 = new Date("12-01-2024");

// console.log(myCreatedDate.toDateString()) //Thu Jan 26 2023
// console.log(myCreatedDate.toLocaleString()) //26/1/2023, 12:00:00 am
//console.log(myCreatedDate.getTime()) //1674671400000


// console.log(myCreatedDate2.toDateString()) //Thu Jan 26 2023
// console.log(myCreatedDate2.toLocaleString()) //1/12/2024, 12:00:00 am



// 👉👉months starts with 0 in java script

let myCreatedDateTime = new Date(2023,0,26,12,15,55);
//console.log(myCreatedDateTime.toLocaleString())  //26/1/2023, 12:15:55 pm

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime)
// console.logL(Math.floor(Date.now()/1000)) //to convert in seconds
 
let newDate = new Date()
console.log(newDate)            //2024-10-23T15:20:53.967Z
console.log(newDate.getMonth()+1)//9 +1
console.log(newDate.getDate())//23 
console.log(newDate.getDay())//3
newDate.toLocaleString('default',{ // 👉 use ctrl+space ❤️ to find all properties
    weekday:"short"

})