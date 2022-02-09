//try catch helps to run our code without ceating crash and updating error time to time

function b() {
  var x = 10;
}
try {
  console.log("x:", x);
} catch (err) {
  console.log("err:", err);
}
var a = 90;

console.log("a:", a);
/////////////////////////
var a = 90;

function b() {
  var x = 10;
}
// 90
console.log("a:", a);

// reference error
console.log("x:", x);
