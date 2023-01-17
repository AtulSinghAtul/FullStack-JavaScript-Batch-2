/* 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills". */

//Definition and Usage

//The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.

//The lastIndexOf() method searches the string from the end to the beginning.

//The lastIndexOf() method returns the index from the beginning (position 0).

//The lastIndexOf() method returns -1 if the value is not found.

//The lastIndexOf() method is case sensitive.

//Syntax
//string.lastIndexOf(searchvalue, start)

let arr = ["atul", "singh", "pw skills"];

console.log(arr.lastIndexOf("pw skills")); //2
console.log(arr.lastIndexOf("pw skills", 0)); //-1
console.log(arr.lastIndexOf("pw skills", 1)); //-1
console.log(arr.lastIndexOf("pw skills", 2)); //2
console.log(arr.lastIndexOf("pw skills", 3)); //2
