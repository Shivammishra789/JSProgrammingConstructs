const COUNT = 5;

const numberArray=[]; 

for ( let i = 0; i < COUNT; i++ ) {
    numberArray[i] = Math.floor(( Math.random() * 899 ) + 100);
}

console.log("Random numbers are: " +numberArray);

let max = numberArray[0];
let min = numberArray[0];

for ( i = 0; i < numberArray.length; i++) {
    if ( numberArray[i] > max ) {
        max = numberArray[i];
    }
    if ( numberArray[i] < min ) {
        min = numberArray[i];
    }
}

console.log("max is : " +max);
console.log("min is : " +min); 