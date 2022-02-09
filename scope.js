function outer() {
  console.log("x:", x);

  inner();
  function inner() {
    var x = 10;
  }
}
var c = 10;
outer();
////////////////////////////////

{
  // compound statement
  var aa = 90;
  let aaa = 990;
  const aaaa = 9900;
  console.log("aaaa:", aaaa);
}
const aaaa = 56;
console.log("aaaa:", aaaa);
///////////////////////////////////
