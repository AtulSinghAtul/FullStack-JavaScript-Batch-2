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
let languages = ["JavaScript", "Java", "C"];
//checking the array is containig "Java" or not
console.log(languages.includes("Java")); //true
//checking the array is containig "C++" or not
console.log(languages.includes("C++")); //false
// second argument specifies position to start the search
console.log(languages.includes("Java", 2)); //false
console.log(languages.includes("Java", 1)); //true
console.log(languages.includes("Java", 0)); //true
// the search starts from third last element
console.log(languages.includes("Java", -1)); //false
console.log(languages.includes("Java", -2)); //true
