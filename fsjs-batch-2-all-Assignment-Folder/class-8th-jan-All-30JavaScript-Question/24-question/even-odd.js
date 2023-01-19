/*24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included). */

let arrEven = [];
//console.log(arrEven);
let arrOdd = [];

function evenOddFunc(params) {
  if (params % 2 === 0) {
    arrEven.push(params);
  } else {
    arrOdd.push(params);
  }
}
evenOddFunc(-1);
evenOddFunc(0);
evenOddFunc(3);
evenOddFunc(100);
console.log(arrEven);
console.log(arrOdd);
