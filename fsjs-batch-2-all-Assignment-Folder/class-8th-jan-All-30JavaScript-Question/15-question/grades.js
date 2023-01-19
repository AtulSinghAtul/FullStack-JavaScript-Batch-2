/*15. Write a program which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F */

function giveGrades(num) {
  if (num >= 80) {
    return "A";
  } else if (num >= 70) {
    return "B";
  } else if (num >= 60) {
    return "C";
  } else if (num >= 50) {
    return "D";
  } else {
    return "F";
  }
}

let storeNum = giveGrades(49);
console.log(storeNum);
