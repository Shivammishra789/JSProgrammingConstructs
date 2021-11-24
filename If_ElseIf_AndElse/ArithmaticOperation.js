const prompt = require('prompt-sync')();

console.log("Enter 3 numbers to perform the arithmetic operations");
const firstNum = prompt('Enter First Number: ');
const secondNum = prompt('Enter Second Number: ');
const thirdNum = prompt('Enter Third Number: ');

const num1 = firstNum+(secondNum*thirdNum);
const num2 = firstNum%secondNum+thirdNum;
const num3 = thirdNum + (firstNum/secondNum);
const num4 = (firstNum*secondNum) +thirdNum;
console.log(num1+','+ num2+','+num3+','+num4);
let max,min;
if(num1>num2 && num1>num3 && num1>num4)
    max = num1;
else if(num2>num1 && num2>num3 && num2>num4)
    max = num2;
else if(num3>num1 && num3>num2 && num3>num4)
    max=num3;
else    
    max=num4;

if(num1<num2 && num1<num3 && num1<num4)
    min = num1;
else if(num2<num1 && num2<num3 && num2<num4)
    min = num2;
else if(num3<num1 && num3<num2 && num3<num4)
    min=num3;
else    
    min=num4;

console.log('Maximum is: '+max +'\nMinimum is: '+min );