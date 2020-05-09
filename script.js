// this is the greeting example, taking the date and gethour method to display the convenient greeting based on time statements.

let today = new Date(); //get the date
let hourNow = today.getHours(); //get the current time
let greeting; //create a greeting

if(hourNow > 18){
    greeting = 'Good evening'
} else if (hourNow > 12){
    greeting = 'Good afternoon'
} else if (hourNow > 0){
    greeting = 'Welcome'
}
document.write(greeting); //use the html document object to write greeting!

