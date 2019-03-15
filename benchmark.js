var Benchmark = require("benchmark");
var task1 = require("./task1.js");
var task2 = require("./task2.js");
var suite = new Benchmark.Suite();
var N = 31;
var M = 4;
var A = Math.floor(Math.random() * 2 ** N);
var Astr = A.toString(2).padStart(N, "0");
suite
  .add("task 1 binary version", function() {
    task1.findLongestAfterFlipping(A, M, N);
  })
  .add("task 1 string version", function() {
    task1.findLongestAfterFlippingStr(Astr, M, N);
  })
  .add("task 2 binary version", function() {
    task2.findLongestAfterFlipping(A, M, N);
  })
  .add("task 2 string version", function() {
    task2.findLongestAfterFlippingStr(Astr, M, N);
  })
  .on("cycle", function(event) {
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
