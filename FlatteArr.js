let arr = [[4, 6, 8], [1, 6], 55, 2, [6, 9]];

function Flat(arr) {
  let op = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      op = op.concat(Flat(element));
    } else {
      op.push(element);
    }
  });
  return op;
}

console.log(Flat(arr));
// [4,6,8,1,6,55,2,6,9]
