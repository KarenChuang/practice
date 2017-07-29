// 01 shorthand function
let flower = {
height: 10,
colour: 'red',
// grow: function () {
//   this.height += 5
// }
grow() {
  this.height += 5
}
}
flower.grow()
console.log(flower.height) //15

// 02 shorthand properties
let height = 5
let strength = 100

let warrior = {
  // height: height,
  // strength: strength

  height,
  strength
}
console.log(warrior)

// 03 object assign
let person = {
  name: 'Karen',
  height: '170',
  strength: 100
}

let newWarrior = {
  height: '200',
  strength: 1000
}

let myWarrior = Object.assign({}, person, newWarrior)

console.log(myWarrior)
// {
//   name: 'Karen',
//   height: '200',
//   strength: 1000
// }

// 04 object assign copy
let person1 = {
  name: 'Karen',
  age: 22
}

// let person2 = person1
// person2.name = 'Mary'

// console.log(person1) // {name: 'Mary' age: 22}  🙅
// person2.name = ;

let person2 = Object.assign({}, person1);
person2.name = 'Mary'

console.log(person2) // {name: "Mary", age: 22} 👌
console.log(person1) // {name: "Karen", age: 22} 👌

