// class Factory {
//   constructor(name) {
//     this.name = name;
//   }

//   ArrowFunc() {
//     setTimeout(() => {
//       console.log("ArrowFunc:", this.name);
//     }, 150);
//   }
//   NormalFunc() {
//     setTimeout(function () {
//       console.log("NormalFunc:", this.name);
//     }, 200);
//   }
// }
// let temp = new Factory("Amol");
// temp.ArrowFunc();
// temp.NormalFunc();
/////////////////////////////////////////

function Construct(name) {
  this.name = name;
  this.func = () => {
    console.log("name is", name);
  };
}
//...
// function Construct(name) {
//   this.name = name;
//   this.func = function () {
//     console.log("name is", name);
//   };
// }

let ans = new Construct("realme");
ans.func();
//...

class House {
  constructor(color) {
    this.color = color;
  }
  getFurniture() {
    return "Sofa";
  }
}
const HouseColor = new House("red");
console.log(HouseColor.color);
console.log(HouseColor.getFurniture());
//...

function Counting() {
  let c = 0;
  this.incr = function () {
    c++;
    console.log("c Incr:", c);
  };
  this.decr = function () {
    c--;
    console.log("c Decr:", c);
  };
}

const plus = new Counting();
plus.incr();
plus.incr();
plus.incr();
plus.incr();
plus.decr();
///////////////////////////////////////
let obj = {
  name: "amol",
  age: 28,
};

let copy = Object.assign({}, obj);
console.log("copy:", copy);
