const arr = [
  { fname: "amol", lname: "barkale", age: 29 },
  { fname: "elon", lname: "musk", age: 28 },
  { fname: "aksjay", lname: "kandare", age: 28 },
  { fname: "sumit", lname: "k", age: 27 },
  { fname: "kunal", lname: "m", age: 29 },
];

const output = arr.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log("output:", output);
