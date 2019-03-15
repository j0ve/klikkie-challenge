var task1 = require("./task1.js");
var task2 = require("./task2.js");

// number of bits (if N > 32, only use findLongestAfterFlippingStr, because bitwise operations cant handle > 32 bit numbers)
var N = 31;
// number of moves (bitflips)
var M = 4;
// random number between 0 and 2^N (excluding 2^N itself)
var A = Math.floor(Math.random() * 2 ** N);
var Astr = A.toString(2).padStart(N, "0");

/* OR use preset string of "0" and "1" by commenting above and uncommenting below:
var Astr = "10101011";
var N = Astr.length;
var A = parseInt(Astr, 2); 
*/

console.log("\x1b[1mTask 1, binary function:\x1b[0m");
var result = task1.findLongestAfterFlipping(A, M, N);
var part1 = Astr.substring(0, N - result[1] - 1);
var part2 = Astr.substring(N - result[1] - 1, N - result[0]);
var part3 = Astr.substring(N - result[0], N);
console.log(part1 + "\x1b[32m" + part2 + "\x1b[0m" + part3);
console.log();
console.log("\x1b[1mTask 1, string function:\x1b[0m");
var result = task1.findLongestAfterFlippingStr(Astr, M, N);
var part1 = Astr.substring(0, N - result[1] - 1);
var part2 = Astr.substring(N - result[1] - 1, N - result[0]);
var part3 = Astr.substring(N - result[0], N);
console.log(part1 + "\x1b[32m" + part2 + "\x1b[0m" + part3);
console.log();
console.log("\x1b[1mTask 2, binary function:\x1b[0m");
var result = task2.findLongestAfterFlipping(A, M, N);
var part1 = Astr.substring(0, N - result[1] - 1);
var part2 = Astr.substring(N - result[1] - 1, N - result[0]);
var part3 = Astr.substring(N - result[0], N);
console.log(part1 + "\x1b[32m" + part2 + "\x1b[0m" + part3);
console.log();
console.log("\x1b[1mTask 2, string function:\x1b[0m");
var result = task2.findLongestAfterFlippingStr(Astr, M, N);
var part1 = Astr.substring(0, N - result[1] - 1);
var part2 = Astr.substring(N - result[1] - 1, N - result[0]);
var part3 = Astr.substring(N - result[0], N);
console.log(part1 + "\x1b[32m" + part2 + "\x1b[0m" + part3);
console.log();
console.log("\x1b[1mTask 2, verbose:\x1b[0m");
var result = task2.findLongestAfterFlippingVerbose(Astr, M, N);
console.log(result);
