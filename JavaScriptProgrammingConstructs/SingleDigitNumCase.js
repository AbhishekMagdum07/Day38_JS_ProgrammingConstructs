//1. Read a single digit number and write the number in word using Case

let input = window.prompt("Enter single digit number.")

input = Number(input);

switch (input){
    case 1 : console.log("One");break;
    case 2 : console.log("Two");break;
    case 3 : console.log("Three");break;
    case 4 : console.log("Four");break;
    case 5 : console.log("Five");break;
    case 6 : console.log("Six");break;
    case 7 : console.log("Seven");break;
    case 8 : console.log("Eight");break;
    case 9 : console.log("Nine");break;
    case 0 : console.log("Zero");break;
    default: console.log("Enter valid number.");
}