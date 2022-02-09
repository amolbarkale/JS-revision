let reg = /harry/;

reg = /harry/g; // g means global

// reg = /harry/i; // i means case insensative

console.log("reg:", reg);
console.log("reg:", reg.source);

let s = "This is great learning with harry and also with harry bhai";

//first search (we can use multiple exec with global flag)
let result = reg.exec(s);
console.log("result:", result);

result = reg.exec(s);
console.log("result:", result);

result = reg.exec(s);
console.log("result:", result);

//////////////////////////////

//...test()...//
// returns true or false

let rslt = reg.test(s);
console.log("rslt:", rslt);

//////////////////////////////

//....match()...//

let result2 = s.match(reg);
console.log("result2:", result2);

//////////////////////////////

//... search()...// -1 if not able to search

let result4 = s.search(reg);
console.log("result4:", result4);

//////////////////////////////

//...replace()...//

let result5 = s.replace(reg, "SHUBHAM");
console.log("result5:", result5);
