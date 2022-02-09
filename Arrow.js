// cant use arrow functions in methods and constructors
const camera = {
  price: 45000,
  weight: 1500,
  myDesc: () => {
    return `Proce of this camera is ${this.price}`;
  },
};
//console.log("camera:", camera.myDesc());

class Person {
  constructor(name) {
    this.name = name;
  }

  Arrow() {
    setTimeout(() => {
      console.log("Arrow:", this.name);
    }, 150);
  }

  Normal() {
    setTimeout(function () {
      console.log("NoramlFunc:", this.name);
    }, 200);
  }
}

let newPer = new Person("bob");

newPer.Arrow();
newPer.Normal();
