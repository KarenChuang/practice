console.log('Destructuring');

// 01
let person = {
  name: 'Karen',
  age: 22,
  location: 'Shanghai'
};

let { age } = person;
console.log(age); // 22

// 02
let numbers = [1, 2, 3, 4];
//let [first, second, , fourth] = numbers;
// or 
let [first, second, ...theRest] = numbers;
console.log(first, second, theRest); // 1 2 [3, 4]