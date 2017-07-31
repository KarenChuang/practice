// 01
function* myGenerator() {
  console.log('Hi')
  yield
  console.log('Bye')
}

let myGen = myGenerator()
myGen.next()

// 02
function* groceryList() {
  yield 'Milk'
  yield 'Cheese'
  yield 'Chips'
}

let shopping = groceryList()

for(let item of shopping) {
  console.log(item)
}