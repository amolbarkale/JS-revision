function x() {
  var a = 7;
  function y() {
    console.log("a:", a);
  }
  y();
}
x();
///////////////////////////

// you can return the fuction

function a(b) {
  var x = 8;
  b();
}

a(function b() {
  console.log(x);
});
///////////////////////////

//we ca use z variable any time now as a function inner

// function outer() {
//   var x = 090;
//   function inner() {
//     console.log("amol");
//   }
//   return inner;
// }
// let temp = outer();

////////////////////////////
// function outer() {
//   var x = 90;
//   function inner() {
//     console.log(x);
//   }
//   x = 900;
//   return inner;
// }
// let temp = outer()();  // 900

/////////////////////////////

// function z() {
//   var b = 900;
//   function y() {
//     var a = 7;
//     function x() {
//       console.log("a,b:", a, b);
//     }
//     a = 70;
//     x();
//   }
//   y();
// }
// let temp = z();

///////////////////////////////

// function x() {
//   var i = 1;
//   setTimeout(() => {
//     console.log("i:", i);
//   }, 150);
//   console.log("setTimeout:");
// }
// x();
/////////////////////////////////

// print 1,2,3,... after every secnd

// function check() {
//   for (let a = 1; a < 5; a++) {
//     setTimeout(() => {
//       console.log(a);
//     }, a * 1000);
//   }
// }
// check();
// //
// function check1() {
//   for (var a = 1; a < 5; a++) {
//     function closure(a) {
//       setTimeout(() => {
//         console.log(a);
//       }, a * 1000);
//     }
//     closure(a);
//   }
// }
// check1();
//////////////////////////////////

//classic example of closure

function outest() {
  let y = 2;
  function outer(b) {
    let x = 1;
    function inner() {
      console.log(x, b, y);
    }
    return inner;
  }
  return outer;
}

let temp = outest()("amol");
temp();
///////////////////////////////////////

// data hiding counter

///////////////////////////////

//  organize and scalable code

// function Counter() {
//   let c = 0;

//   this.incre = function () {
//     c++;
//     console.log("c1:", c);
//   };

//   this.decr = function () {
//     c--;
//     console.log("c2:", c);
//   };
// }

// // console.log("c2:", c);

// let temp = new Counter();
// temp.incre();
// temp.incre();
// temp.incre();

// temp.decr();
//////////////////////////////

function garbageCollector() {
  let count = 10;

  return function after() {
    console.log(count);
  };
}
let temp = garbageCollector();

//...

temp();
