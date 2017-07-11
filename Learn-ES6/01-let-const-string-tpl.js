// ----------- let ----------------------

// ---- 
if(1) {
  let name = "Karen";
}

// console.log('name', name); // undefined


// ---- 
for (var i = 0; i < 10; i++ ) {
  console.log(i);
}

console.log('var outside loop', i); // var outside loop 10


// ---- 
for (let j = 0; j < 10; j++ ) {
  console.log(j);
}

console.log('let outside loop', j); // j is not defined

// ----
{
  var new_name = 'Karen';
}

console.log(new_name); // new_name is not defined


// ----------- const ---------------------
const KEY = '13QBFHJSDF';

KEY = 'DJBJ';


// ----------- Multiline Strings -----------
let name = `Karen
This is a new line`;

console.log(name);

let firstName = 'Karen';
let lastName = 'Chuang';

console.log('My name is' + firstName + ' ' + lastName); //My name is Karen Chuang
console.log(`My name is ${firstName} ${lastName}`); //My name is Karen Chuang


let person = {
  firstName: 'Karen',
  lastName: 'Chuang',
  sayName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
}
let my_name = person.sayName();

console.log(name); //My name is Karen Chuang



