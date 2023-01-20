/*28. Write a program to print the given patterns using the loops-
	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
	   *
	   **
	   *** 
*/
function patternsA(params) {
  let str = "";
  for (let i = 1; i <= params; i++) {
    for (let j = 0; j < i; j++) {
      str = str + "*";
    }
    str = str + "\n";
  }
  console.log(str);
}
//patternsA(3);

/*b. Print a square pattern, if the input is 3 then the output should be similar to the given output
 ***
 ***
 ***
 */
function patternsA(params) {
  // debugger;
  let str = "";
  for (let row = 1; row <= params; row++) {
    for (let col = 0; col < params; col++) {
      // document.write("*");
      str = str + "*";
    }
    // newline after each row
    str = str + "<br>";
  }
  document.write(str);
  // console.log(str);
}
//patternsA(3);

/*
	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
	     *
	    ***
 	   ***** 
     
*/
function patternsA(params) {
  // debugger;
  let str = "";
  for (let row = 1; row <= params; row++) {
    for (let col = params; col > row; col--) {
      if (col < 2 && col > 2) {
        str = str + " ";
      } else {
        str = str + " ";
      }
      // document.write("*");
    }
    // newline after each row
    for (let i = 0; i < row * 2 - 1; i++) {
      str += "*";
    }
    // str = str + "<br>";
    str = str + "\n";
  }
  console.log(str);
  // document.write(str);
  // console.log(str);
}
patternsA(3);
