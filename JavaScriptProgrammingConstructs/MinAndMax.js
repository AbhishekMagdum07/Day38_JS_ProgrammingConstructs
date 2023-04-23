// const prompt = require("prompt-sync")();
//Write a program that reads 5 Random 3 Digit values and then outputs the minimum
//and the maximum value


let collect = [];
    
for(var i=1 ; i<=5 ; i++){
    var numbers = Math.ceil(Math.random()*899)+100;  //generating random numbers between 0-100;
    collect.push(numbers); 
                          // collecting all random numbers in arry.
}
console.log("Three digits random numbers",collect);

let maximum = Math.max(...collect);     //... spread operator.
let minimun = Math.min(...collect);

console.log("Maximum number :",maximum);
console.log("Minimum number :",minimun);