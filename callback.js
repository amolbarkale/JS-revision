// a fucntion passing we are passing inside another function as a parameter is a callback function

// function x(y) {
//   console.log("function x:");
//   y();
// }
// x(function y() {
//   console.log("y:", y);
// });
///////////////////////////////////////////

//callback used in setTimeout function

// setTimeout(() => {
//   console.log("setTimeout:");
// }, 4000);

// function inner(y) {
//   console.log("inner:");

//   y();
// }

// inner(function outer() {
//   console.log("outer:");
// });
///////////////////////////////////////////

// closure forming with counter event listener

function attachEventListener() {
  let c = 0;
  document.getElementById("clicked").addEventListener("click", function xyz() {
    console.log(c++);
  });
}

attachEventListener();
