//"Working with Iterators Methos"

console.log("Working with Iterators Methos");
console.log("===================================================================");

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
 function logFruits(element){
     console.log(element);
 }

 fruits.forEach(logFruits);

//  ES6 iteration ======================================
console.log("ES6 iteration");


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
console.log(" ");

//working with filter()
console.log("Working with filter()");

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
const smallNumbers2 = randomNumbers.filter(number => {
  return number < 250;
});

console.log(smallNumbers2.join(' '));


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})
console.log(favoriteWords.join(' '));

console.log('Working with findIndex()');

const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals2.findIndex(animal => {return animal === 'elephant'});
console.log(foundAnimal);

const startsWithS = animals2.findIndex(animal => {return animal[0] === 's'});
console.log(startsWithS);

console.log("");

