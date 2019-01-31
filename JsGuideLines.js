/**
 * Destructuring Arrays And Objects
 */

const hobbies = ['Sports','Cooking']
const person ={
    name:"Galoomba",
    age:16,
}

// Destructuring object 
// extract the name form the object 

const getName = ({name})=>name;
const mName= getName(person)

const {name,age} =person

console.log(mName)
console.log(name,age)


//Destructuring Arrays 
//extract some element from array 
const [myHobby] = hobbies

const [hobby1, hobby2]=hobbies

console.log(myHobby)
console.log(hobby1,hobby2)