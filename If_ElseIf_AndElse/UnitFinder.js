const prompt = require('prompt-sync')();

const num = prompt('Enter a number: ');

if(num==1)
    console.log("One");
else if(num==10)
    console.log("Ten");
else if(num==100)
    console.log("Hundred");
else if(num==1000)
    console.log("Thousand");
else if(num==10000)
    console.log("1 Lakh");
else if(num==1000000)
    console.log("Ten Lakh");
else if(num==10000000)
    console.log("Crore");
else
    console.log("Please enter a valid number");