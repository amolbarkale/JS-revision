let arr = [2, 0, 22, 1];
let sub = [22, 0, 1];

function check(arr, sub) {
  let i = 0,
    j = 0;
  while (i < arr.length && j < sub.length) {
    if (arr[i] == sub[j]) {
      i++;
      j++;
      if (j == sub.length) return true;
    } else {
      i = i - j + 1;
      j = 0;
    }
  }
  return false;
}

console.log(check(arr, sub));
///////////////////////////////////////////
const type = {
  A: "string",
  B: "number",
  C: "boolean",
  D: {
    E: "boolean",
  },
};

const value = {
  A: "something",
  B: 23,
  C: true,
  D: {
    E: false,
  },
};

function typeCheck(type, value) {
  let key;

  let count = 0;

  for (key in type) {
    if (typeof type[key] !== "object") {
      if (type[key] == typeof value[key]) {
        count++;
      }
    } else {
      return typeCheck(type[key], value[key]);
    }
  }

  if (count == Object.keys(type).length) {
    return true;
  } else {
    return false;
  }
}
