/*09. Boolean value is either true or false.
    - Write three JavaScript statement example which provide truthy value.
    - Write three JavaScript statement example which provide falsy value. */

// all falsy value is 0, -0, 0n, false, null, undefined, NaN, ""

//truthy value
if (Infinity) {
  console.log("truthy value"); //truthy value
} else {
  console.log("falsy value");
}

if (new Date()) {
  console.log("truthy value"); //truthy value
} else {
  console.log("falsy value");
}

if ("false") {
  console.log("truthy value"); //truthy value
} else {
  console.log("falsy value");
}

if ([]) {
  console.log("truthy value"); //truthy value
} else {
  console.log("falsy value");
}

//falsy value
let falsy;

if (falsy) {
  console.log("truthy value");
} else {
  console.log("falsy value"); //falsy value
}

let falsy2 = "";

if (falsy2) {
  console.log("truthy value 2");
} else {
  console.log("falsy value 2"); //falsy value 2
}

let falsy3 = Infinity / Infinity;

if (falsy3) {
  console.log("truthy value 3");
} else {
  console.log("falsy value 3"); //falsy value 2
}
console.log(typeof Infinity / Infinity);
