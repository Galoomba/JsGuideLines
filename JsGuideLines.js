/**
 * using Arrays
 */

const hobbies = ['Sports','Cooking']

// //foreach loop 
// for (let hobby of hobbies)
//     console.log(hobby)

// //using map function 
// console.log(hobbies.map(hobby=>"hoppy "+hobby))
// //orginal array stayed the same 


/**
 * Array Objects Reference types 
 * --> Although it's a constant we can still add and delete element to it
 * as the Reference is the constant not the element 
 */
hobbies.push('Fishing')

console.log(hobbies)