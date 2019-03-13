// number of bits
var N = 16;
// number of moves (bitflips)
var M = 5;
// random number between 0 and 2^N
var An = Math.round(Math.random() * 2 ** N);
// string of "0" and "1" representing random number
var Ab = An.toString(2);
// OR preset string of "0" and "1" by commenting above and uncommenting below:
// var AB = "1010101010";
// pad string with "0" to the left so string length == number of bits (N)
var A = Ab.padStart(N, "0");

// Case 1: sliding window: start at first M bits, count number of 0's and 1's, and keep expanding window to the right until both number of 0's or number of 1's exeeds M
// so keep expanding while 0 count < M OR 1 count < M
// whenever either exceeds M, then move the left part of the window to the right, and deduce either number of 0's or number of 1's, so we can go on expanding to the right again

// CAse 2: start window from the right! Because bits flip to the left. Then keep expanding window leftward while counting the number of bitflips necessary to create string of 0's or string of 1's.
// whenever number of bitflips needed for both exceeds M, then move the right part of the window
// also, we have to calculate a temporary string for the current window, based on number of bitflips for both scenarios, due to possible overlap!
// this temporary string also has to be [windowL - 1 to Window R], because a bitflip on the leftmost bit will also flip the bit left of the leftmost!
// or we could just do a recalculated version of the whole bitstring and lay the window over that? until the rightmost window edge is moved, because then counting restarts
// or i have 3 windows, a flip range within which number of flips must be <= M, and 2 resultranges, one for flips towards zeros, and one for flips towards ones.
