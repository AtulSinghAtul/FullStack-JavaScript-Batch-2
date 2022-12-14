// Decalaring the array
//first one is recomended
// let myArray = ["Atul", "Singh", "FSJS", 1, 2, 1234, true];
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[4]);
// console.log(myArray[5]);
// console.log(myArray[6]);

//Second way to declare the array

// let myArrayCons = new Array("Atul", "Singh", "FSJS", 1, 2, 1234, true);
// console.log(myArrayCons[0]);
// console.log(myArrayCons[1]);
// console.log(myArrayCons[2]);
// console.log(myArrayCons[3]);

// All Array Methods
// Push Method
// let myArray = ["Atul", "Singh", "FSJS", 1, 1234, true];

// myArray.push("Anurag", "Sir");
// console.log(myArray);

// Slice Method
// let sliceArray = ["Atul", "Singh", "FSJS", 1, 1234, true];
//1st:- slicing the array from start to end
// let arrStore = sliceArray.slice();
// console.log(arrStore);

//2nd:- slicing from the second index
// let arrStore1 = sliceArray.slice(1);
// console.log(arrStore1);
//3rd:- slicing from second index to five index
// let arrStore2 = sliceArray.slice(2, 5);
// console.log(arrStore2);
// console.log(sliceArray);
//4th:- using also negative parameter for slicing
// let arrStore3 = sliceArray.slice(1, -3);
// console.log(arrStore3);

// 3rd:- Splice Method
//let languages = ["JavaScript", "Python", "Java", "Lua"];

// adding elements without deleting existing elements
//let removed = languages.splice(1, 0, "C", "C++");
//console.log(removed); //[]
//console.log(languages); //[ 'JavaScript', 'C', 'C++', 'Python', 'Java', 'Lua' ]

// replacing "Java" & "Lua" with "JS" & "React"
//let removed1 = languages.splice(4, 2, "JS", "React");
//console.log(removed1); //[ 'Java', 'Lua' ]
//console.log(languages); //[ 'JavaScript', 'C', 'C++', 'Python', 'JS', 'React' ]

// removes everything from start
//let removed2 = languages.splice(1);
//console.log(removed2); //[ 'C', 'C++', 'Python', 'JS', 'React' ]
//console.log(languages); //[ 'JavaScript' ]

// remove none & add 3 more element
//let removed3 = languages.splice(1, -2, "Swift", "Scala", "Go");
//console.log(removed3); // [ ]
//console.log(languages); // [ "JavaScript", "Swift", "Scala", "Go" ]

// remove last element and add 3 more elements
//let removed4 = languages.splice(-1, 1, "java", "css", "node");
//console.log(removed4); // [ 'Go' ]
//console.log(languages); // [ 'JavaScript', 'Swift', 'Scala', 'java', 'css', 'node' ]

//concatenation of array
// let num1 = [1, 2, 3, 4];
// let num2 = [5, 6, 7, 8];
// let num3 = [9, 10, 11, 12];
//concatinate three array
// let conCatThreeArr = num1.concat(num2, num3);
// console.log(conCatThreeArr);
//adding one value and array
// let concatOneValueAndArray = num3.concat("111", num2);
// console.log(concatOneValueAndArray);

//fill() Method
//fill every index by "atul"
// let arr = [1, 2, 3, 4, 5];
// arr.fill("atul");
// console.log(arr);

// replacing element of array from index 1 to 3 by 'JavaScript'
// arr.fill("JavaScript", 1, 3);
// printing the original array
// console.log(arr);

//start from negative index value
// arr.fill("AAAA", -1);
// console.log(arr);

//both negative index value
// arr.fill("AAAA", -4, 3);
// console.log(arr);

//includes() Method

// defining an array
//let languages = ["JavaScript", "Java", "C"];
//checking the array is containig "Java" or not
//console.log(languages.includes("Java")); //true
//checking the array is containig "C++" or not
//console.log(languages.includes("C++")); //false
// second argument specifies position to start the search
//console.log(languages.includes("Java", 2)); //false
//console.log(languages.includes("Java", 1)); //true
//console.log(languages.includes("Java", 0)); //true
// the search starts from third last element
//console.log(languages.includes("Java", -1)); //false
//console.log(languages.includes("Java", -2)); //true

//include method is case sensitive
//console.log(languages.includes("java")); //false
//console.log(languages.includes("Java")); //true

//indexOf() Method
//let languages = ["Java", "Python", "JavaScript", "C", "JavaScript"];

// get the index of the first occurrence of "JavaScript"
//let index = languages.indexOf("JavaScript");
//console.log(index); // 2
// index start from 1 to searching value
//let index1 = languages.indexOf("JavaScript", 1);
//console.log(index1); // 2
// index start from 3 to searching value
//let index2 = languages.indexOf("JavaScript", 3);
//console.log(index2); // 4

// isArray() Method
//let num = [1, 2, 3, 4];
//console.log(Array.isArray(num)); // true
// passing an simple variable
//let num1 = 2;
//console.log(Array.isArray(num1)); // false
// passing an empety array
//console.log(Array.isArray([])); // true

// we creted array with element 5 and passed that value to isArray()
//console.log(Array.isArray(new Array(5))); // true
//passing undefined value to isArray()
//console.log(Array.isArray(undefined)); // false

// join() Method

//let num = [1, 2, 3, 4, 5, 6];
//console.log(typeof num); // object
//console.log(num);
//console.log(num.join()); //1,2,3,4,5,6
//console.log(num.join("")); //123456
//console.log(num.join(" ")); //1 2 3 4 5 6
// let chect the datatype of the join method
// join method converted output into string
//let var1 = num.join(" | ");
//console.log(var1); //1 | 2 | 3 | 4 | 5 | 6
//console.log(typeof var1); //string

//lastIndexOf Method
//let arr = [1, 2, 3, 4, "atul", 5, 6, "atul", 7, 8, "atul"];
//start searches the value from last index because last index of start searches from last indexes
//console.log(arr.lastIndexOf("atul")); // 10

//lastIndexOf() with two Parameters

// second argument specifies the starting index
// from where the method searches the element backward
//console.log(arr.lastIndexOf("atul", 8)); // 7

// lastIndexOf() with Negative Parameter
// start the searches from last
//console.log(arr.lastIndexOf("atul", -5)); //4

//Map() Method

// let num = [1, 4, 9, 16, 25];

// let mapSqrt = num.map(Math.sqrt);
// console.log(mapSqrt);//[1,2,3,4,5]
// console.log(num);//[1, 4, 9, 16, 25]

// pop() Method
// let num = [1, 4, 9, 16, 25];
// let popMethod = num.pop();
// console.log(popMethod);//25
// console.log(num);//[ 1, 4, 9, 16 ]

//reverse Method
// let num = [1, 4, 9, 16, 25];
// console.log(num.reverse());
// console.log(num);

//shift() method
//let num = [1, 4, 9, 16, 25];
//shift element from the first position in array and this will change all index position
//console.log(num.shift()); // 1
//modifing the original array
//console.log(num); //[ 4, 9, 16, 25 ]

// unshift() Method
// let num = [1, 4, 9, 16, 25];
// console.log(num.unshift(111, 222, 333, 444));
// console.log(num);

//sort() Method
// let city = ["California", "Barcelona", "Paris", "Kathmandu"];
// sort the city array in ascending order
//let sortedArray = city.sort();
//console.log(sortedArray); //[ 'Barcelona', 'California', 'Kathmandu', 'Paris' ]
//console.log(city); //[ 'Barcelona', 'California', 'Kathmandu', 'Paris' ]

//let num = [21, 6, 98, 176, 3, 1];
//console.log(num.sort()); //[ 1, 176, 21, 3, 6, 98 ]
//console.log(num); //[ 1, 176, 21, 3, 6, 98 ]

// when compare function is passed
// let ascend = city.sort(function (a, b) {
//   return a.length - b.length;
// });
//console.log(ascend); //[ 'Paris', 'Barcelona', 'Kathmandu', 'California' ]
//console.log(city); //[ 'Paris', 'Barcelona', 'Kathmandu', 'California' ]

//ascending and descending order argest using function parameter
//let num = [45, 7, 8, 67, 0, 8, 4, 343, 21];

// let numAsc = num.sort(function name(a, b) {
//   return a - b;
// });
//ascending order
//console.log(numAsc); //[ 0,  4,  7,   8, 8, 21, 45, 67, 343]

//change original array
//console.log(num); //[ 0,  4,  7,   8, 8, 21, 45, 67, 343]

// let numAsc1 = num.sort(function name(a, b) {
//   return b - a;
// });
//descending order
//console.log(numAsc); //[343, 67, 45, 21, 8, 8, 7, 4, 0]
//change original array
//console.log(num); //[343, 67, 45, 21, 8, 8, 7, 4, 0]

//split() Method
// converting to the array
// let name = "Atul";
// console.log(name.split(""));
// console.log(name.split());

// for of Method

//let upperName = ["atul", "singh"];

// let pus = [];
// for (const iterator of upperName) {
//   pus.push(iterator.toUpperCase());
// }
//console.log(pus); //[ 'ATUL', 'SINGH' ]

//break and continue
//break
// for (let i = 0; i < 10; i++) {
//   if (i == 3) {
//     // console.log(i);
//     break; // simply break  out of the block
//   }
//   console.log(i);
// }

//continue
for (let i = 0; i < 6; i++) {
  if (i == 3) {
    // console.log(i);
    continue; // simply continue means to skip at the point where will check condition
  }
  console.log(i);
}
