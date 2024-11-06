// const myNums= [ 1,23,44,554,33,]
// const newNums = myNums.filter((nums) => nums > 4)
// console.log(newNums);

const nsujsr = [
    {name:"Gautam",class:' CSE',course:"",sesson:"2024-28",adminNO:"101"},
    {name:"Sneha Yadav",class:'Mech',course:"",sesson:"2024-28",adminNO:"102"},
    {name:"Niraj",class:'',course:"Civil",sesson:"2024-28",adminNO:"103"},
    {name:"Abhishek",class:'',course:"CSE",sesson:"2024-28",adminNO:"104"},
    {name:"Krish Kumar",class:'',course:"Mech",sesson:"2024-28",adminNO:"105"},
    {name:"Sambhvi",class:'',course:"CSE",sesson:"2024-28",adminNO:"106"},
    {name:"Pooja Kaul",class:'',course:"Civil",sesson:"2024-27",adminNO:"107"},
    {name:"sunny",class:'',course:"CSE",sesson:"2024-28",adminNO:"108"},
    {name:"Aman",class:'',course:"Civil",sesson:"2024-28",adminNO:"109"},
    
]
//when we use scope{} then return key is must
let filtered = nsujsr.filter((info)=>info.course==="CSE")
 filtered= nsujsr.filter((info)=>{
    return info.course==="Civil"&& info.sesson==="2024-27"
})
console.log(filtered)