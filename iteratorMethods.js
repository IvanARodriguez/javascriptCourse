//"Working with Iterators Methos"

console.log("Working with Iterators Methos");
console.log("===================================================================");

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
 function logFruits(element){
     console.log(element);
 }

 fruits.forEach(logFruits);

//  ES6 iteration

fruits.forEach(fruitItem => console.log(`I want to eat a ${fruitItem} `));

//   Map() explained; compared to forEach map creates a new array of the given array.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', ' ', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {return animal[0]});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {return number / 100});

console.log(smallNumbers.join(' '));

console.log("");

