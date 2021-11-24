// 1. Getting a single digit number between 0 and 9 
let randNum= Math.floor(Math.random()*10);
console.log("Random number is "+ randNum);

// 2. Getting a die number between 1 and 6
let diceRoll=Math.floor(Math.random()*6)+1;
console.log("Random dice number is "+ diceRoll);

// 3. Getting the sum of 2 die number
let count=2,sum=0;
while(count>0)
{
    sum=sum+Math.floor(Math.random()*6)+1;
    count--;
}
console.log("Sum of 2 dice number is "+sum);

// 4. getting 5 random 2 digit numbers and find thier sum and avg
count = 5,sum = 0;
for(i=1; i <= count; i++){
randNum= Math.floor(Math.random()*90) + 10;
console.log(i + " random number is "+ randNum);
sum += randNum;
}
console.log("Sum of random 5 numbers is "+ sum);
console.log("Avg of random 5 numbers is "+ sum/5);

