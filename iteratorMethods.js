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

//Call reduce() to acumulate the numbers in an array below
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The current value of accumulator: ', accumulator);
  console.log('The current value of currentValue: ', currentValue);

  return accumulator + currentValue;
}, 10) // 10 is a third argument that increment the accumulator by 10

console.log(newSum);

// using some() and every() functions
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

const interestingWords = words.filter(word => {
  return word.length > 5;
})

// Use filter to create a new array
const newWords = words.filter(word => {return word.length < 6})


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word => {return word.length > 5 } ));

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');

console.log(storyWords.length);

const betterWords = storyWords.filter(word => {
  if(unnecessaryWords.includes(word)){
    return word;
  }
});

let repeatedTimes = 0;

betterWords.forEach(word => repeatedTimes++);

console.log(repeatedTimes);

let sentences = 0;

storyWords.forEach(word => {
  if(word[word.length-1] === '.' || word[word.length-1] === '!'){
    sentences+=1;
  }
});

console.log(`your paragraph has ${storyWords.length} words, it also has ${sentences} sentences and ${repeatedTimes} overused words.`);

console.log(betterWords.join(', '))


console.log("");

