console.log('Arrow Functions')

// 01 
let add = (a, b) => {
  return a + b
}
console.log(add(1, 2)) //3

// 02
let sub = (a, b) => a - b
console.log(sub(10, 1)) // 9

// 03
let numbers = [1, 2, 3, 4]
let doubled = numbers.map(el => el * 2)
console.log(doubled) // [2, 4, 6, 8]

// 04
let person = {
  name: 'Karen',
  sayName: function() {
    console.log(`My name is ${this.name}`)
  }
}
person.sayName(); // My name is Karen

// 05
let girl = {
  name: 'Karen',
  sayName: () => {
    // lexicol scope
    console.log(`My name is ${this.name}`)
  }
}
girl.sayName(); // error

// 06 or
let boy = {
  name: 'Kimi',
  sayName() {
    // lexicol scope
    console.log(`My name is ${this.name}`)
  }
}
boy.sayName(); // My name is Kimi

// 07
let someone = {
  name: 'Joe',
  hobbies: ['Robots', 'Dance', 'Internet'],
  showHobbies: function() {
    this.hobbies.forEach(function(hobby) {
      console.log(`${this.name} like ${hobby}`)
    })
  }
}

someone.showHobbies();
//  like Robots
//  like Dance
//  like Internet

// 08
let somebody = {
  name: 'Joe',
  hobbies: ['Robots', 'Dance', 'Internet'],
  showHobbies: function() {
    this.hobbies.forEach((hobby) => {
      console.log(`${this.name} like ${hobby}`)
    })
  }
}

somebody.showHobbies();
// Joe like Robots
// Joe like Dance
// Joe like Internet