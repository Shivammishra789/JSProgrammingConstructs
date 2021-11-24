var prompt = require('prompt-sync')();

const numArray = new Array(5);
for(i =0; i<5;i++){
    numArray[i] = parseInt(prompt("Enter "+(i+1)+" number "));  
}
let max = numArray[0];
let min = numArray[0];
console.log(numArray);
for(i = 1;i<5;i++){
    if(numArray[i]>max){
        max = numArray[i];
    }
    if(numArray[i]<min){
        min = numArray[i];
    }
}
console.log("max number is "+ max);
console.log("min number is "+ min);