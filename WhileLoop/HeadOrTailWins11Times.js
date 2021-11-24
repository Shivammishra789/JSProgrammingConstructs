// consider head as 0;
// consider tails as 1;
let headCount = 0;
let tailCount = 0;
while(headCount < 11 && tailCount < 11){
let randomFlip = Math.floor(Math.random()*2); // generating random two numbers 0 or 1;
if(randomFlip == 0){
    headCount++;
}
else{
    tailCount++;
}
}
if(headCount == 11){
    console.log("Head wins")
}
if(tailCount == 11){
    console.log("Tail wins")
}