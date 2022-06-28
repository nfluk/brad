const numbers = [2, 53, 32, 15, 66, 93, 5];
const numbers2 = new Array(34, 344, 31, 64, 6);
const fruit = ['Apple', 'Banana', 'Pear'];
const mixed = [2, 'car', true, undefined, { a: 33, b: 4 }];
const mixed2 = [[33, 34, 35], 2, 'car', true, undefined, { a: 33, b: 4 }];
const cars = [
  ['honda', 'toyota', 'suzuki'],
  ['ferrari', 'lamborghini'],
  ['mercedes', 'bmw', 'audi'],
];

let val;

// get array length
val = numbers.length;

// check if array
val = Array.isArray(numbers);

// get single value
val = cars[1][1];

// add array to array and get single value
cars[3] = ['volvo', 'saab'];
val = cars[3][0];

console.log(numbers);
console.log(val);
