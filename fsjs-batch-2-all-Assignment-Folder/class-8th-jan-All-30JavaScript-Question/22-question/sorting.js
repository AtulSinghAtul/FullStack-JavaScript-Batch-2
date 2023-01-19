/*22. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//console.log(ages);
let s = ages.sort(function (a, b) {
  return a - b;
});
//console.log(s);

let min_age = Math.min(...ages);
//console.log(min_age);

let max_age = Math.max(...ages);
//console.log(max_age);

//Find the median age(one middle item or two middle items divided by two)

function findMedian(numbers) {
  let num = numbers.sort((a, b) => a - b);
  let middle = Math.floor(num.length / 2);
  if (num.length % 2 !== 0) {
    return num[middle];
  } else {
    return (num[middle - 1] + num[middle]) / 2;
  }
}
//console.log(findMedian(ages));

//-Find the average age(all items divided by number of items)

function averageAge(num) {
  let aveAge = 0;
  // console.log(aveAge);
  for (let i = 0; i < num.length; i++) {
    aveAge = aveAge + num[i];
  }
  // console.log(aveAge);
  let dividedByNumberOfItem = aveAge / num.length;
  return dividedByNumberOfItem;
}

//console.log(averageAge(ages));

// - Find the range of the ages(max minus min)

function range(agesNum) {
  function rangeMax(params) {
    let aMax = Math.max(...params);
    return aMax;
  }

  function rangeMin(params) {
    let aMin = Math.min(...params);
    return aMin;
  }

  //invoking to function
  let aMax = rangeMax(agesNum);
  let aMin = rangeMin(agesNum);

  let rangeMinus = aMax - aMin;
  return rangeMinus;
}
let finalRange = range(ages);
//console.log(`Final Range is ${finalRange}`);

//  - Compare the value of (min - average) and (max - average), use abs() method
function absMethod(params, params2) {
  //average function
  function averageAge(params) {
    let aveAge = 0;
    // console.log(aveAge);
    for (let i = 0; i < params.length; i++) {
      aveAge = aveAge + params[i];
    }
    // console.log(aveAge);
    let dividedByNumberOfItem = aveAge / params.length;
    return dividedByNumberOfItem;
  }
  let storeAverageAge = averageAge(params);
  //console.log(storeAverageAge);

  // min max function

  function rangeMax(params) {
    let aMax = Math.max(...params);

    return aMax;
  }
  let storeMax = rangeMax(params);
  //console.log(storeMax);

  function rangeMin(params2) {
    let aMin = Math.min(...params2);
    return aMin;
  }
  let storeMin = rangeMin(params2);
  //console.log(storeMin);

  //comparision section
  //max compare and using abs method
  let compareToMaxAndAverage = Math.abs(storeMax - storeAverageAge); //rangeMax(params)-averageAge(params)
  // return compareToMaxAndAverage;

  //min compare and using abs method
  let compareToMinAndAverage = Math.abs(storeMin - storeAverageAge);
  return `${compareToMaxAndAverage} the compare to min and max value ${compareToMinAndAverage}`;
}

let invokeToAbsFunc = absMethod(ages, ages);
console.log(invokeToAbsFunc);
