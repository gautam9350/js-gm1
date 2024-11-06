const marvel_heros = ["Thor","spider man","iron man"]
const dc_heros= ["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros) //[ 'Thor', 'spider man', 'iron man', [ 'superman', 'flash', 'batman' ] ]

//always use new variable for .concat
// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros); //[ 'Thor', 'spider man', 'iron man', [ 'superman', 'flash', 'batman' ] ]

const all_new_heroes=[...dc_heros,...marvel_heros]
console.log(all_new_heroes)

const num_arrays= [1,3,4,[5,6,7],9,1,5,[77,88,[99,100]]]
const num_real_arrays = num_arrays.flat(Infinity)
console.log(num_real_arrays)

console.log(Array.isArray("gautam"))
console.log(Array.from("gautam"))//converts to array
console.log(Array.from({name:"gautam"}))//intresting
//👆gives empty array 
//
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))








