/**
 * Using let & const insisted of var 
 * const -> the value gonna stay constant
 * let -> same as var but have different scope level
 */

const name='Daviid';
let age =24;

function levelUp(name ,age){
    return name+" "+ ++age;
}

console.log(levelUp(name,age));
