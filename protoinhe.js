let arr = ["amol", "aditya"];

let object = {
  name: "amol",
  city: "Jalgaon",
  getIntro: function () {
    console.log("got intro of", this.name, "from", this.city);
  },
};

function chec() {
  //...
}

let obj = {
  name: "akshay",
};

// never do this
obj.__proto__ = object;
