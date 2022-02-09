// 1...memoize scratch function...//
function memoize(fn, context) {
  const res = {};

  return function (...args) {
    var argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }

    return res[argsCache];
  };
}

const heavyFunc = (num) => {
  for (let a = 1; a < 1000000000; a++) {}
  return num * 2;
};

const effectiveMemoise = memoize(heavyFunc);
console.time("first init");
console.log(effectiveMemoise(2));
console.timeEnd("first init");

console.time("second init");
console.log(effectiveMemoise(2));
console.timeEnd("second init");
////////////////////////////////////////////

// 2...Guess the output...//

console.log("a");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve(() => console.log("pro")).then((res) => res());

console.log("b");

/////////////////////////////////////////////

// 3...Infinite currying...//

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log("add(5)(2)(4)(5)()", add(5)(2)());
//////////////////////////////////////////////
// 4...create function...//

const calc = {
  total: 0,
  addd(a) {
    this.total += a;
    console.log("this:", this);

    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  substract(a) {
    this.total -= a;
    return this;
  },
};

const result = calc.addd(10).multiply(5).substract(30);

console.log("result:", result.total);
