const uno = () => {
  setTimeout(() => {
    return "uno";
  }, 150);
};

const dos = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("dos");
    }, 1200);
  });
};

const tres = () => {
  return "tres";
};

const callMe = async () => {
  let valOne = uno();
  console.log("valOne:", valOne);

  let valTwo = await dos();
  console.log("valTwo:", valTwo);

  let valThree = tres();
  console.log("valThree:", valThree);
};
callMe();
