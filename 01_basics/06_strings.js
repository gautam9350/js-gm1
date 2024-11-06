const name = "Gautam"
const myRepoCount = 50
//console.log(name + myRepoCount + "value") ⚠️ dont use it 
console.log(`Hello my name is ${name} my repocounts are ${myRepoCount}`)
const newName = new String('gautammehta')
console.log(newName[0])
console.log(newName.length)
console.log(newName.toUpperCase())
console.log(newName.charAt(3))
console.log(newName.indexOf('h'))
const newString =newName.substring(1,4)
console.log(newString)
const anotherString = newName.slice(-8,4)
const newStringOne= "   gajakjfl  "
console.log(newStringOne)
console.log(newStringOne.trim())
 
const url = "https://infoweb%20techhub"
console.log(url.replace('%20','-'))
console.log(url.includes('info'))
console.log(newName.split(''))