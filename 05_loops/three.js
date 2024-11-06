const myNums = [1,2,3,4,5,6,7]

// const newMyNums = myNums.map((nums)=>nums+10)
const newMyNums = myNums.map((nums)=>nums*10).map((nums)=>nums+2).filter((nums)=>nums>=52)

console.log(newMyNums);
