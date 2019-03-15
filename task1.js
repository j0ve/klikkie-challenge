/*
Task 1
Having a list of N light bulbs(some of them are lit and some are not) and you are allowed to perform exactly M moves. A move consists of turning the light bulb on or off.
Write an algorithm that finds the longest line that all either are ON or OFF.
*/
module.exports = {
  findLongestAfterFlipping: function(A, M, N) {
    // first window to investigate has zero length, so ending bit schould be before starting bit
    var window = [0, -1];
    // initialize count of zeroes and ones
    var count = [0, 0];
    // initialize array holding the largest window found
    var longest = [0, 0];
    // while end of window hasn't reached end of binary string
    // OR if the start of the window is further the end of the string than the current longest window found, because then we're never going to find a longer window
    while (window[1] < N || N - window[0] > longest[1] - longest[0] + 1) {
      // if count of zeroes OR count of ones within current window <= M, then do 2 things:
      if (count[0] <= M || count[1] <= M) {
        // 1. check if current window is wider than largest yet, and if so, update it
        if (window[1] - window[0] > longest[1] - longest[0]) longest = window.slice();
        // 2. increase the window size to the left and see if that adds either a zero or a one
        window[1]++;
        count[(A & (1 << window[1])) != 0 ? 1 : 0]++;
        // if there are both too many zeroes and ones within the window
      } else {
        // shrink the window from the right and see if that removes either a zero or a one
        count[(A & (1 << window[0])) != 0 ? 1 : 0]--;
        window[0]++;
      }
    }
    // once the current window has reached the end of the binary string, return the longest window
    return longest;
  },

  // same function but using a string of characters "0" and "1", for > 32 bit strings
  findLongestAfterFlippingStr: function(A, M, N) {
    // first window to investigate has zero length, so ending bit schould be before starting bit
    var window = [0, -1];
    // initialize count of zeroes and ones
    var count = [0, 0];
    // initialize array holding the largest window found
    var longest = [0, 0];
    // while end of window hasn't reached end of binary string
    // OR if the start of the window is further the end of the string than the current longest window found, because then we're never going to find a longer window
    while (window[1] < N || N - window[0] > longest[1] - longest[0] + 1) {
      // if count of zeroes OR count of ones within current window <= M, then do 2 things:
      if (count[0] <= M || count[1] <= M) {
        // 1. check if current window is wider than largest yet, and if so, update it
        if (window[1] - window[0] > longest[1] - longest[0]) longest = window.slice();
        // 2. increase the window size to the left and see if that adds either a zero or a one
        window[1]++;
        count[parseInt(A[N - window[1] - 1])]++;
        // if there are both too many zeroes and ones within the window
      } else {
        // shrink the window from the right and see if that removes either a zero or a one
        count[parseInt(A[N - window[0] - 1])]--;
        window[0]++;
      }
    }
    // once the current window has reached the end of the binary string, return the longest window
    return longest;
  }
};
