/**
 * using objects
 */

const Person={
    name:'Daviid',
    age :24,
    //functions shapes..
        levelUp(name ,age){ return this.name+" "+ this.age++;},
        levelUpUp:function(name ,age){return this.name+" "+ this.age++;},
        //In Arrow function This keyword refere to the globle scope not the object scope
        levelUpUpUp:(name ,age)=>{this.name+" "+ this.age++;}
}
console.log(Person.levelUp(Person.name,Person.age));
console.log(Person.levelUpUp(Person.name,Person.age));
console.log(Person.levelUpUpUp(Person.name,Person.age));
