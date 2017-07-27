// es5 
function Plane() {
  this.wings = 2
  this.speed = 100
  this.altitude = 0
}

Plane.prototype.fly = function() {
  this.altitude = 3000
}
const myPlane = new Plane()

function JetFighter() {
  this.speed = 1000
}

JetFighter.prototype = new Plane()

const myJetFighter = new JetFighter()

console.log(myJetFighter)

// es6
class Human {
  constructor(height) {
    this.height = height
    this.location = {
      x: 0,
      y: 0
    } 
  } // no comma
  walk(x, y) {
    this.location.x += x
    this.location.y += y
  }
  static get sayHello() {
    return console.log('Hi')
  }
}
// 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

class Warrior extends Human {
  constructor() {
    super()
    this.strength = 10
  }
}

const myWarrior = new Warrior()
console.log(Human.sayHello)