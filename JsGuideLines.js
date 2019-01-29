/**
 * using Arrays
 */

const hobbies = ['Sports','Cooking']

//foreach loop 
for (let hobby of hobbies)
    console.log(hobby)

//using map function 
console.log(hobbies.map(hobby=>"hoppy "+hobby))
//orginal array stayed the same 
console.log(hobbies)