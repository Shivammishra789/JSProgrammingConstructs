const arg1 = process.argv[2];
let n = arg1;

let i = 1;
let powerTable = 1;
while(powerTable<256 && i <= n){
    powerTable = Math.pow(2,i);
    console.log("2^"+i+" = "+powerTable);
    i++;
}