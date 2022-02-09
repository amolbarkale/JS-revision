let promise1 = new Promise((res, rej) => {
  let sum = 1 + 1;
  if (sum == 3) {
    res("sum is correct");
  } else {
    rej("sum is not correct");
  }
});
promise1
  .then((msg) => {
    console.log("this is in then", msg);
  })
  .catch((err) => {
    console.log("this is in err", err);
  });

//////////////////////////////////////////

let pro1 = new Promise((res, rej) => {
  res("prom1 res");
});

let pro2 = new Promise((res, rej) => {
  res("prom2 res");
});

let pro3 = new Promise((res, rej) => {
  res("prom3 res");
});

Promise.all([pro1, pro2, pro3])
  .then((msg) => {
    console.log("Promise.all", msg);
  })
  .catch((err) => {
    console.log("errer:", err);
  });
