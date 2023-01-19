function numberOfDays(month, year) {
  const d = new Date(year, month, 0).getDate();
  return d;
}
let storeDays = numberOfDays(2, 2024);
console.log(storeDays); //31
//console.log(numberOfDays(2, 2024)); //29
if (storeDays === 29) {
  console.log("leap year");
} else {
  console.log("Not leap year");
}
