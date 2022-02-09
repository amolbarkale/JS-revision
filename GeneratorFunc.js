// generator funnction

function* genNumbers() {
  let i = 0;

  while (true) {
    yield (i++).toString();
  }
}

let temp = genNumbers();
console.log("genNumbers:", temp.next().value);
console.log("genNumbers:", temp.next().value);

console.log("genNumbers:", temp.next().value);

console.log("genNumbers:", temp.next().value);

console.log("genNumbers:", temp.next().value);

console.log("genNumbers:", temp.next().value);
