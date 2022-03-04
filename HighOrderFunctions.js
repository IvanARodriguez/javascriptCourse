
// Working with Higher Order Functions=======================================================

console.log("Working with Higher Order Functions");


console.log("===================================================================");

// sum a million time to test iteration time
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
//   function with a single parameter
const addTwo = num => num + 2;
  
//function with a function as parameter
const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};
  
//a function expression with a function as parameter
  const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

// function that takes a function and a value as a parameter
  const checkConsistentOutput = (myFunc, myValue) => {
    let firstCall = myFunc(myValue);
    let secondCall = myFunc(myValue);
    if (firstCall === secondCall) {
      return firstCall;
    } else {
      return 'This function returned inconsistent results'
    }
  }
  
//call function with another function as parameter and a value.
  checkConsistentOutput(addTwo, 3);

console.log(checkConsistentOutput(addTwo, 3));

console.log("");

  
  
  