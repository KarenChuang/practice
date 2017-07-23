// 01. for...of
let progranmingLanguages = ['Javascipt', 'Ruby', 'Go']

for (var i = progranmingLanguages.length - 1; i >= 0; i--) {
  console.log(`I like ${progranmingLanguages[i]}`)
}

for( let language of progranmingLanguages) {
  console.log(`I like ${language}`)
}

// 02. Array.from 方法将 Iterator 转为真正的数组
function sum() {
  console.log(arguments)
  arguments = Array.from(arguments)
  return arguments.reduce((prev, cur) => prev + cur)
}

console.log(sum(1,2,3)) // 6

console.log(Array.from('Dose this work?'))
// ["D", "o", "s", "e", " ", "t", "h", "i", "s", " ", "w", "o", "r", "k", "?"]

// 03  find() find the first one and stop
let students = [{
  name: 'Steve',
  course: 'History'
},{
  name: 'Mary',
  course: 'Science'
},{
  name: 'Lisa',
  course: 'Physice'
},{
  name: 'Karen',
  course: 'Physice'
}]

let physiceStudent = students.find((item) => item.course === 'Physice')
console.log(physiceStudent) 
// {
//   name: 'Lisa',
//   course: 'Physice'
// }


let allPhysiceStudents = students.filter((item) => item.course === 'Physice')
console.log(allPhysiceStudents)
// [{
//   name: 'Lisa',
//   course: 'Physice'
// },{
//   name: 'Karen',
//   course: 'Physice'
// }]

let physiceStudentsIndex = students.findIndex((item) => item.course === 'Physice')
console.log(physiceStudentsIndex) // 2