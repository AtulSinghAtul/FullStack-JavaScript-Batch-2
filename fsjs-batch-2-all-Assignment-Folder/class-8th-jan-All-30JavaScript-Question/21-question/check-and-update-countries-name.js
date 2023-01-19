/*21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list. */
// let countries = ["India", "America", "ETHIOPiA"];

// for (country of countries) {
//   if (country === "ETHIOPIA") {
//     //console.log("Find Country Name");
//   } else {
//     //console.log("not found country");
//   }
// }

let countries1 = ["japan", "china"];

let c = countries1.includes("ethopia");
console.log(c);
if (c === true) {
  console.log("found country");
} else if (c === false) {
  let d = countries1.push("ethopia");
  console.log(d);
  console.log(countries1);
}
// for (country1 of countries1) {
//   console.log(country1);
//   if (country1 === "ETHIOPIA") {
//     console.log("Found Country Name");
//   } else {
//     let c = countries1.push("ETHIOPIA");
//     console.log(
//       `this is else block, else block is pshhing to country- ETHIOPIA  `
//     );
//   }
// }
