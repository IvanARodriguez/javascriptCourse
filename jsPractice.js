// FINDING THE TWO SMALLEST NUMBERS IN AN ARRAY AND SUM THEM.

let myNumbers = [22, 3, 20, 90, 30, 27];

function sumTwoSmallestNumbers(numbers){
    //find the two smallest numbers

    //a place to store the smallest numbers
    let smallest;
    //a place to store the second smallest number
    let secondSmallest;
    // compare the first two nmbers in the array
    if (numbers[0] < numbers[1]){
        smallest = numbers[0]
        secondSmallest = numbers[1]
    } else {
        smallest = numbers[1]
        secondSmallest = numbers[0]
    }
    //iterate  over numbers starting with the 3rd number
    for(let i = 2; i < numbers.length; i++){
        const currentNumber = numbers[i];
        // if the current number is smaller than the smallest number
        if (currentNumber < smallest){
            //set smallest number to the 2nd smallest number
            secondSmallest = smallest;
            //set the current number to the smallest number
            smallest = currentNumber;
        } else if (currentNumber < secondSmallest) {
            //else if the current number is smaller than the 2nd smaller number
                //set the second smallest number to the current number
                secondSmallest = currentNumber;
        }
    }
    let result = "Your two smallest numbers are "+ smallest + " and " + secondSmallest + " and the sum = " + (smallest+secondSmallest);
    return result; 
}
// ==========================================================================================
// Working with arrays and switch to display the days of the week============================
// ==========================================================================================

// Lets print the days of the week
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// print days array with a for loop.
for(let i = 0; i < days.length; i++){
    document.getElementById("daysOfTheWeek").innerHTML += "<br>"+ days[i];
    console.log(days[i]);
}

// GREETING FOR USER
// get the current day
const dayOfWeek = new Date().getDay();
let greeting;
let dayMessage;
// greet from current day
switch(days[dayOfWeek]){
    case "Sunday": // Sunday
        greeting = "Hi there " + "today is " + days[dayOfWeek] + ": ";
        dayMessage = "Sunday funday, what are you doing today?";
        document.getElementById("daysOfTheWeek").innerHTML += "<br>" + greeting + dayMessage;
        break
    case "Monday": // Monday
        greeting = "Hi there " + "today is " + days[dayOfWeek] + ": ";
        dayMessage = "Let's start Monday with a great attitude!";
        document.getElementById("daysOfTheWeek").innerHTML += "<br>" + greeting + dayMessage;
        break
    case "Tuesday": // Tuesday
        greeting = "Hi there " + "today is " + days[dayOfWeek] + ": ";
        dayMessage = "Tuesday is a great day for walking and relax";
        document.getElementById("daysOfTheWeek").innerHTML += "<br>" + greeting + dayMessage;
        break
    case "Wednesday": // Wednesday
        greeting = "Hi there " + "today is " + days[dayOfWeek] + ": ";
        dayMessage = "Wednesday is s great day to go out and eat something";
        document.getElementById("daysOfTheWeek").innerHTML += "<br>" + greeting + dayMessage;
        break
    case "Thursday": // Thrusday
        greeting = "Hi there " + "today is " + days[dayOfWeek] + ": ";
        dayMessage = "On thrusday almost everyone gets ready for the weekend";
        document.getElementById("daysOfTheWeek").innerHTML += "<br>" + greeting + dayMessage;
        break
    case "Friday": // Friday
        greeting = "Hi there " + "today is " + days[dayOfWeek] + ": ";
        dayMessage = "Friday is here and we can party at night.";
        document.getElementById("daysOfTheWeek").innerHTML += "<br>" + greeting + dayMessage;
        break
    case "Saturday": // Saturday
        greeting = "Hi there " + "today is " + days[dayOfWeek] + ": ";
        dayMessage = "On Saturday I love to spend the day out if is sunny";
        document.getElementById("daysOfTheWeek").innerHTML += "<br>" + greeting + dayMessage;
        break
}
console.log(greeting);