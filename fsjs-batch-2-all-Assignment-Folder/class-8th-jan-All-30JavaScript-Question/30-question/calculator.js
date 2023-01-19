/*30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.
 */

function calculator(num1, num2) {
  let addition = num1 + num2;
  let substraction = num1 - num2;
  let multiplication = num1 * num2;
  let division = num1 / num2;
  console.log(
    `added no is ${addition}, subtracted no is ${substraction}, multiplicted no is ${multiplication}, divided no is ${division}`
  );
}
calculator(2, 4);
