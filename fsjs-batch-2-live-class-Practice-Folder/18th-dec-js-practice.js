// first way
// function atul(arr) {
//   console.log(arr);
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// let myName = atul([7, 8, 9, 10, 11, 12, 13, 14, 15]);
// console.log(myName);
// console.log("atul");

// second way
// function atul() {
//   console.log(arguments);
//   console.log(typeof arguments);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }
//   return sum;
// }

// console.log(atul(7, 8, 9, 10, 11, 12, 13, 14, 15));
// console.log("atul");

//Arrow function

// let add = (arr) => {
//   console.log(arr);
//   console.log(typeof arr);
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// };
// let num = add([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(num);

//Object

let userName = {
  firstName: "Atul",
  lastName: " Singh",
  role: "Admin",
  logInCount: 25,
};
//console.log(userName);
//get key value - we have two way
//first
//console.log(userName["lastName"]);
//second:- Recomended
//console.log(userName.role);

//Declare method inside object

//for in

for (let x in userName) {
  //console.log(x);
  console.log(typeof x);
  //access the value using key
  console.log(userName[x]);
}
