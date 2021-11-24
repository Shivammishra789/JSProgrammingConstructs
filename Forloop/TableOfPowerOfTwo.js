const arg1 = process.argv[2];
let n = arg1;

for(i = 1; i <= n; i++){
    console.log("2^"+i+" = "+Math.pow(2,i));
}
