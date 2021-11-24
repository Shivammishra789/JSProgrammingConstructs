const prompt = require('prompt-sync')();

const num = parseInt(prompt('Enter a number ex. 1,10,100,1000,etc to display '));

switch(num)
{
    case 1:
        console.log("One");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten thousand");
        break;
    case 100000:
        console.log("One Lakh");
        break;
    default:
        console.log("enter correct number");
        break;
}