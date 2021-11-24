const prompt = require('prompt-sync')();

const num = parseInt(prompt('Enter a number to display its factorial '));
let fact = 1;
for(i = num; i >= 1; i--){
    fact*=i;
}
console.log("Factorial of "+num+" is "+fact);