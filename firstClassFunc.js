// function statement- function declaration

function statemnet() {
  console.log("function statemnt:");
}
statemnet();

//functino expression

var funcc = function check() {
  console.log("function expression");
};
funcc();

// named - function expression (Get() will give us an error but named() not)
let named = function Get() {
  console.log("named fucntion");
};

// but we can pass the named function inside that function also

let outer = function inner() {
  console.log(inner);
};
outer();
//////////////////////////////
/////////////  1]
function PassedBy(param1) {
  console.log("param1:", param1);
}

function xyz() {}
PassedBy(xyz);

/////////////  2]
function Pass(param1) {
  console.log("param2:", param1);
}

Pass(function () {});

///////////// 3]

function outest() {
  return function innerMost() {};
}

console.log("outest:", outest());
