/*
29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.
 */
function inputFilename(filename) {
  let changeIntoString = String(filename);
  console.log(typeof changeIntoString);
}
inputFilename(true);
inputFilename(1234);
inputFilename("Atul");
inputFilename(null);
inputFilename(undefined);
