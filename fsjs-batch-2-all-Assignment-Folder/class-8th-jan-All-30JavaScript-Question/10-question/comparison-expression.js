/*10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    - 4 > 3
    - 4 >= 3
    - 4 < 3
    - 4 <= 3
    - 4 == 4
    - 4 === 4
    - 4 != 4
    - 4 !== 4
    - 4 != '4'
    - 4 == '4'
    - 4 === '4'
    - Find the length of python and jargon and make a falsy comparison statement.
     */

//console.log(4 > 3); //true
//console.log(4 >= 3); //true
//console.log(4 < 3); //false
//console.log(4 <= 3); //false
//console.log(4 == 4); //true
//console.log(4 === 4); //true
//console.log(4 != 4); //false
//console.log(4 !== 4); //false
//console.log(4 != "4"); //false
//console.log(4 == "4"); //true
//console.log(4 === "4"); //false

let name1 = "python";
let name2 = "jargon";

if (name1.length != name2.length) {
  console.log("truthy comparison statement");
} else {
  console.log("falsy comparison statement."); //falsy comparison statement.
}
