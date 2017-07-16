console.log('Spread Operator and Rest Parameters');

// 01
let sum = function(...args) {
  console.log(args);
}

console.log(sum(1,2,3,4)); // [1, 2, 3, 4]

// 02
let reduceSum = function(...args) {
  return args.reduce((prev, curr) => prev + curr);
};

console.log(reduceSum(1,2,3,4)); // 10

// 03
let multiply = (mul, ...numbers) => {
  console.log(mul, numbers);
};

multiply(2,7,4,5); // 2, [7,4,5]

// 04
let newMultiply = (mul, ...numbers) => {
  return numbers.map((n) => {
    return mul * n
  });
};

let result = newMultiply(2,7,4,5); 
console.log(result);// [14, 8, 10]

// 05
let numbers = [4,6,3,8];
let max = Math.max(numbers);
console.log(max); // NaN

// 06
let newNumbers = [4,6,3,8];
// let newMax = Math.max.apply(null, numbers);
let newMax = Math.max(...numbers);
console.log(newMax); // 8

// 07
let nums = [1,3,4,5];
let newNum = [6,7,8, ...nums];
console.log(newNum); // [6, 7, 8, 1, 3, 4, 5]

