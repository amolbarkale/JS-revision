// function sum(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a, b, c);
//     };
//   };
// }

function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

sum(5)(10)(15)(20);
// into

const summ = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;

const add = sum(5)(10)(7)(3)(5);
console.log("add:", add);
