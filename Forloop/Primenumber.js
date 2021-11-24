const prompt = require('prompt-sync')();

const num = parseInt(prompt('Enter a number to check prime or not '));
let flag = 1;
if(num == 1){
    console.log("Its not a prime number")
}
else{
    for(i = 2; i <= num/2; i++){
        let prime = num % i;
        if(prime == 0){
            flag = 0;
            break;
        }
        if(prime != 0){
            flag = 1;
        }
    }
    if(flag == 0){
        console.log("Its not a prime number");
    }
    else{
        console.log("Its a prime number");
    }
}
