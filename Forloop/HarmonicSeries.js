const arg1 = process.argv[2];
let n = arg1;
let harmonic = 1;
for(i = 2; i <= n; i++){
    harmonic = harmonic + (1/i);
}
console.log(harmonic);