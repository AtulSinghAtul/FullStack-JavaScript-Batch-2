/*
27. Write a program to print all the prime number between 0 to 100 (0 and 100 included). 
*/

function printAllPrimeNumber(params) {
  for (let i = 2; i <= params; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      console.log(i);
      // console.log(`${params} is a prime no.`);
    }

    // console.log(`${params} is a not prime no.`);
  }
}
printAllPrimeNumber(100);
