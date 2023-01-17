/*14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd. */

function evenOddNumber(number) {
  if (number % 2 === 0 && number != 0) {
    return "even number";
  } else if (number % 2 != 0) {
    return "odd number";
  } else if (number === 0) {
    return "whole number";
  }
}

let randomNumber = Math.round(Math.random() * 3);

let getValue = evenOddNumber(randomNumber);

console.log(`${randomNumber} is ${getValue}`);
