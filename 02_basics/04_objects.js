// const tinderUser = new Object()
// const tinderUser={}//same as above
// tinderUser.id= "12gfdh"
// tinderUser.name= "Sunny"
// tinderUser.isLoggedIn = false//{ id: '12gfdh', name: 'Sunny', isLoggedIn: false }
// // console.log(tinderUser)

//const regularUser= {
    // email : "123@qwer",
    // fullname :{
    //     username:{
    //         fname : "Gautam",
    //         lname :"Mehta"
    //     }
    // }

//}
// console.log(regularUser.fullname) //{ id: '12gfdh', name: 'Sunny', isLoggedIn: false }
// console.log(regularUser.fullname.username) //{ fname: 'Gautam', lname: 'Mehta' }

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}
// const obj4 = {5:"a",6:"b"}
// const obj3 = {obj1 ,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({},obj1,obj2,obj4)
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//const obj3  = {...obj1,...obj2} //almost always in use
// console.log(obj3)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser))//[ '12gfdh', 'Sunny', false ]
// console.log(Object.entries(tinderUser))//[ [ 'id', '12gfdh' ], [ 'name', 'Sunny' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true

const course = {
    coursename:"js hindi ",
    courseprice: "999",
    courseinstructor:"hitesh sir"
}
// course.courseinstructor

const {courseinstructor} = course//de-structuring
console.log(courseinstructor)




























