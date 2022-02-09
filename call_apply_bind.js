namee = {
  fname: "Amol",
  lname: "Barkale",
};

function printFullName(hometown, state) {
  console.log(this.fname, this.lname, hometown, state);
}
namee1 = {
  fname: "Sahil",
  lname: "Dabri",
};

//...call

printFullName.call(namee1, "Jalgaon", "Maharashtra");

//...apply

printFullName.apply(namee, ["Beed", "Maharashtra"]);
//... bind

let newCopy = printFullName.bind(namee1, "Mumbai", "Maharashtra");
newCopy();
///////////////////////////////////////////

//...POLYFILL for bind ...//

school = {
  class: "5th",
  div: "b",
};

let checkInfo = function (uniform, tiffin, miss) {
  console.log(this.class, this.div, uniform, tiffin, miss);
};

//if we write method Function.prototype then each n every method we wrte has access to that method ie. functions n this case
Function.prototype.MyBind = function (...args1) {
  // this will bind to checkInfo here so =>
  let obj = this;
  let params = args1.slice(1);
  return function (...args2) {
    obj.apply(args1[0], [...params, ...args2]);
  };
};

let ans = checkInfo.MyBind(school, "gray", "Roti");
ans("vaidya madam");
