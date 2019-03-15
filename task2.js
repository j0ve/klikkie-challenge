/*
Task 2
Now when the user switches a bulb ON or OFF, it also switches the one on it’s left (if it exists).
Write an algorithm that finds the longest line that all either are ON or OFF.
*/
module.exports = {
  findLongestAfterFlipping: function(A, M, N) {
    // first window to investigate has zero length, so ending bit schould be before starting bit
    var window = [0, -1];
    // keep track of temporary versions of A, which we are going to change into zeroes or ones respectively
    var temp = [A, A];
    // initialize array holding the largest window found
    var longest = [0, 0];
    // initialize counted flips
    var flips = [0, 0];
    // loop while part of string yet to be traversed is longer than the currently longest solution
    while (N - window[0] > longest[1] - longest[0] + 1) {
      // whenever right edge of window[0] is moved left, start sliding left window[1] edge to the left until we have to do more than M flops, OR until left window edge exceeds input string N's length
      while ((flips[0] <= M || flips[1] <= M) && window[1] < N) {
        // if our current window (of which the number of flips is <= M) is wider than the currently longest solution, update the longest solution yet
        if (window[1] - window[0] > longest[1] - longest[0]) longest = window.slice();
        // expand window leftward
        window[1]++;
        // if we have a 1 at new index, we have to flip it to increase string of zeroes. This however also flips the next bit
        if ((temp[0] & (1 << window[1])) != 0) {
          // xor with left shifted 3 (11 in binary) to flip two bits
          temp[0] ^= 3 << window[1];
          // number of flops needed for a string of zeroes increased by 1
          flips[0]++;
        }
        if ((temp[1] & (1 << window[1])) === 0) {
          // xor with left shifted 3 (11 in binary) to flip two bits
          temp[1] ^= 3 << window[1];
          // number of flops needed for a string of ones increased by 1
          flips[1]++;
        }
      }
      window[0]++;
      // reinitialize temp, flips, and left side of window after right side of window moves
      temp = [A, A];
      flips = [0, 0];
      window[1] = window[0] - 1;
    }
    // once the current window has reached the end of the binary string, return the longest window
    return longest;
  },
  // same as above but with string input (if binary string > 32 bits)
  findLongestAfterFlippingStr: function(A, M, N) {
    // first window to investigate has zero length, so ending bit schould be before starting bit
    var window = [0, -1];
    // keep track of temporary versions of A, which we are going to change into zeroes or ones respectively
    var temp = [A, A];
    // initialize array holding the largest window found
    var longest = [0, 0];
    // initialize counted flips
    var flips = [0, 0];
    while (N - window[0] > longest[1] - longest[0] + 1) {
      while ((flips[0] <= M || flips[1] <= M) && window[1] < N) {
        if (window[1] - window[0] > longest[1] - longest[0]) longest = window.slice();
        window[1]++;
        // if we have a 1 at new index, we have to flip it to increase string of zeroes. This however also flips the next bit
        if (temp[0][N - window[1] - 1] == "1") {
          temp[0] = temp[0].substr(0, N - window[1] - 1) + "0" + temp[0].substr(N - window[1], N - 1);
          if (temp[0][N - window[1] - 2] == "1") temp[0] = temp[0].substr(0, N - window[1] - 2) + "0" + temp[0].substr(N - window[1] - 1, N - 1);
          else if (temp[0][N - window[1] - 2] == "0") temp[0] = temp[0].substr(0, N - window[1] - 2) + "1" + temp[0].substr(N - window[1] - 1, N - 1);
          flips[0]++;
        }
        if (temp[1][N - window[1] - 1] == "0") {
          temp[1] = temp[1].substr(0, N - window[1] - 1) + "0" + temp[1].substr(N - window[1], N - 1);
          if (temp[1][N - window[1] - 2] == "1") temp[1] = temp[1].substr(0, N - window[1] - 2) + "0" + temp[1].substr(N - window[1] - 1, N - 1);
          else if (temp[1][N - window[1] - 2] == "0") temp[1] = temp[1].substr(0, N - window[1] - 2) + "1" + temp[1].substr(N - window[1] - 1, N - 1);
          flips[1]++;
        }
      }
      window[0]++;
      // reinitialize temp, flips, and left side of window after right side of window moves
      temp = [A, A];
      flips = [0, 0];
      window[1] = window[0] - 1;
    }
    // once the current window has reached the end of the binary string, return the longest window
    return longest;
  },
  // same as above but with verbose output
  findLongestAfterFlippingVerbose: function(A, M, N) {
    // first window to investigate has zero length, so ending bit schould be before starting bit
    var window = [0, -1];
    // keep track of temporary versions of A, which we are going to change into zeroes or ones respectively
    var temp = [A, A];
    // initialize array holding the largest window found
    var longest = [0, 0];
    // initialize counted flips
    var flips = [0, 0];
    // initialize step buffer
    var tempsteps = [[], []];
    // initialize steps
    var steps = [[], []];

    while (N - window[0] > longest[1] - longest[0] + 1) {
      while ((flips[0] <= M || flips[1] <= M) && window[1] < N) {
        if (window[1] - window[0] > longest[1] - longest[0]) {
          steps[0] = tempsteps[0].slice();
          steps[1] = tempsteps[1].slice();
          longest = window.slice();
        }
        window[1]++;
        // if we have a 1 at new index, we have to flip it to increase string of zeroes. This however also flips the next bit
        if (temp[0][N - window[1] - 1] == "1") {
          temp[0] = temp[0].substr(0, N - window[1] - 1) + "0" + temp[0].substr(N - window[1], N - 1);
          tempsteps[0].push(window[1]);
          if (temp[0][N - window[1] - 2] == "1") temp[0] = temp[0].substr(0, N - window[1] - 2) + "0" + temp[0].substr(N - window[1] - 1, N - 1);
          else if (temp[0][N - window[1] - 2] == "0") temp[0] = temp[0].substr(0, N - window[1] - 2) + "1" + temp[0].substr(N - window[1] - 1, N - 1);
          flips[0]++;
        }
        if (temp[1][N - window[1] - 1] == "0") {
          temp[1] = temp[1].substr(0, N - window[1] - 1) + "0" + temp[1].substr(N - window[1], N - 1);
          tempsteps[1].push(window[1]);
          if (temp[1][N - window[1] - 2] == "1") temp[1] = temp[1].substr(0, N - window[1] - 2) + "0" + temp[1].substr(N - window[1] - 1, N - 1);
          else if (temp[1][N - window[1] - 2] == "0") temp[1] = temp[1].substr(0, N - window[1] - 2) + "1" + temp[1].substr(N - window[1] - 1, N - 1);
          flips[1]++;
        }
      }
      window[0]++;
      // reinitialize temp, flips, step buffer, and left side of window after right side of window moves
      tempsteps = [[], []];
      temp = [A, A];
      flips = [0, 0];
      window[1] = window[0] - 1;
    }
    // once the current window has reached the end of the binary string, return the longest window
    return { "longest window: ": longest, "flips for zeroes: ": steps[0], "flips for ones: ": steps[1] };
  }
};
