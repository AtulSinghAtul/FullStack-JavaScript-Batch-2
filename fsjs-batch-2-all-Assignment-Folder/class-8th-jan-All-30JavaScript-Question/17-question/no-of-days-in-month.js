/*17. Write a program which tells the number of days in a month. */

function numberOfDays(month, year) {
  const d = new Date(year, month, 0).getDate();
  return d;
}

console.log(numberOfDays(1, 2023)); //31
console.log(numberOfDays(2, 2024)); //29
