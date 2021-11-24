const prompt = require('prompt-sync')();
let numArray = new Array();
let primeArray = new Array();
const range = parseInt(prompt('Enter range of numbers '));

for(i = 0; i < range; i++){
const num = parseInt(prompt('Enter '+i+' number to check prime or not '));
    numArray[i] = num;
}
let flag = 1;
for(i = 0; i < numArray.length; i++){
if(numArray[i] == 1){
    flag = 0;
}
    else{
        for(j = 2; j <= numArray[i]/2; j++){
            let prime = numArray[i] % j;
            if(prime == 0){
                flag = 0;
                break;
            }
            if(prime != 0){
                flag = 1;
            }
        }
    }
    if(flag == 1){
        primeArray.push(numArray[i]);
    }  
}
console.log("The prime numbers present are " + primeArray);
