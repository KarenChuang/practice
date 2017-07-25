// 01
const person = new Map()

person.set('name', 'Karen')
person.set('age', '23')

console.log(person.get('name'))
console.log(person.get('age'))

// 02
const locations = ['Shanghai', 'Beijing']
const locationSet = new Set(locations)

console.log(locationSet.has('Shanghai'))
locationSet.add('Shengyang')
locationSet.has('Shengyang')
console.log(locationSet.has('Shengyang'))

// 03
const girl = new Map([
  ['name', 'Karen'],
  ['age', '23']
])
girl.delete('name')
console.log('girl.keys', girl.keys()) // MapIterator
 
for(key of girl.entries()) {
  console.log(key)
}
