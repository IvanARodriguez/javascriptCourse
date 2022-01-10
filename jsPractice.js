let numbers = [22, 10, 20, 90, 30, 27];


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
    console.log(smallest, secondSmallest);

    return smallest + secondSmallest;

        
}