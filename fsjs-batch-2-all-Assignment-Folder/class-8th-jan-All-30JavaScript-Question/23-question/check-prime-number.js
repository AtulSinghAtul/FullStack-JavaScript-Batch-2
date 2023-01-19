/*23. Write a program to check that the number given by the user is a prime number or not. */

function checkIsPrimeNumber(params) {
  let isPrime = true;
  if (params > 1) {
    for (let i = 2; i < params; i++) {
      if (params % i === 0) {
        isPrime = false;
        console.log(
          `${params} is a not prime number, this answer comes from  for loop, inside from if statement`
        );
        break;
      }
    }
    if (isPrime) {
      console.log(`${params} is a prime number`);
    }
  }
  console.log(
    `${params} is a not prime number, answer comes from out of if block.`
  );
}
checkIsPrimeNumber(0);
