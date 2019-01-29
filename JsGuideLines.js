/**
 * Rest & sprade opreatiors 
 */

const hobbies = ['Sports','Cooking']

// copy array by slice 
const copiedHobbies =hobbies.slice()

//  Sprade opreatior
const secondCopy=[...hobbies]

//  Rest opreatior
const toArray=(...args)=>args
const thirdCopy=toArray(1,2,3,4,5)

console.log(copiedHobbies)
console.log(secondCopy)
console.log(thirdCopy)