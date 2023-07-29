# Assignmets Questions 4

### Q.1 Explain Hoisting in JavaScript

> Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed. This means that you can use variables and call functions before they are actually declared in the code. However, it's important to note that only the declarations are hoisted, not the initializations or assignments.

Let's take a closer look at how hoisting works with variables and functions:

1. Variable Hoisting:
   When a variable is declared using the `var` keyword, its declaration is hoisted to the top of its scope. The variable is assigned the value `undefined` until the actual assignment statement is reached in the code.

Example:

```javascript
console.log(x); // Output: undefined
var x = 5;
```

In the above example, even though `x` is accessed before its declaration, it doesn't throw an error. This is because the declaration of `x` is hoisted to the top, and at that point, it's treated as `var x;`, so the initial value is `undefined`.

2. Function Hoisting:
   Function declarations are also hoisted to the top of their scope. This means that you can call a function before it's declared in the code.

Example:

```javascript
sayHello();

function sayHello() {
  console.log("Hello!");
}
```

In this example, the function `sayHello` is hoisted to the top, so the function call `sayHello()` works fine, even though the function is defined afterward.

It's important to note that function expressions (when functions are assigned to variables) are not hoisted. Only function declarations are hoisted.

Example of non-hoisting behavior with function expressions:

```javascript
sayHi(); // Error: sayHi is not a function
var sayHi = function () {
  console.log("Hi!");
};
```

To avoid confusion and make the code more readable and maintainable, it's recommended to declare variables and functions before using them, rather than relying on hoisting. Additionally, starting from ECMAScript 6 (ES6), using `let` and `const` for variable declarations helps in preventing some hoisting-related issues, as they have block-scoping behavior and are not hoisted to the entire function scope like `var`.

### Q.2 Explain Temporal Dead Zone?

> The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs with variables declared using `let` and `const` keywords. It refers to the time span between entering a scope and the actual declaration of a variable within that scope. During this period, any attempt to access the variable results in a ReferenceError.

Let's take a closer look at how the Temporal Dead Zone works:

1. Declaration Phase:
   When a variable is declared using `let` or `const`, it is added to the scope but remains uninitialized. However, unlike `var`, which is hoisted and initialized with `undefined`, variables declared with `let` and `const` stay in the TDZ until they are explicitly assigned a value.

2. TDZ Period:
   The TDZ is the part of the code where the variable exists in the scope but is not yet accessible. It begins at the start of the scope (block) and ends at the point where the variable is declared. During this period, trying to access the variable will throw a `ReferenceError`.

Example:

```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

In this example, the variable `x` is accessed before its declaration, which causes a `ReferenceError` due to the Temporal Dead Zone.

3. Declaration Point:
   The declaration point is where the variable is formally declared in the code. After this point, the variable is considered to be in a defined state, and it can be accessed without any issues.

Example:

```javascript
let y = 10; // Declaration point

console.log(y); // Output: 10
```

In this case, the variable `y` is declared and initialized at the same time. There is no Temporal Dead Zone because the variable is accessible from this point onward.

To avoid encountering the Temporal Dead Zone, it's a good practice to declare variables at the beginning of the scope or block where they are used. This ensures that the variables are accessible throughout the scope and avoids any potential issues with TDZ.

### Q.3 Difference between var & let?

> In JavaScript, both `var` and `let` are used to declare variables, but they have some important differences in terms of scoping and behavior. Here are the key differences between `var` and `let`:

1. Scoping:

- `var`: Variables declared with `var` have function-level scope. This means that they are accessible throughout the entire function in which they are declared, regardless of block boundaries. If a `var` is declared within a block (e.g., if statement or loop), it is still accessible outside of that block.
- `let`: Variables declared with `let` have block-level scope. This means that they are limited to the block in which they are declared. They are not accessible outside of the block where they are defined.

Example:

```javascript
function exampleScope() {
  if (true) {
    var x = 10; // Function-scoped variable
    let y = 20; // Block-scoped variable
  }

  console.log(x); // Output: 10
  console.log(y); // ReferenceError: y is not defined
}
```

2. Hoisting:

- `var`: Variables declared with `var` are hoisted to the top of their containing function or global scope during the compilation phase. This means that you can access `var` variables before their actual declaration, but they will have the value `undefined` until they are assigned a value explicitly.
- `let`: Variables declared with `let` are also hoisted, but they are placed in the Temporal Dead Zone (TDZ) until their declaration is reached during the code execution. Accessing a `let` variable before its declaration will result in a ReferenceError.

Example:

```javascript
console.log(x); // Output: undefined
var x = 5;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

3. Re-declaration:

- `var`: Variables declared with `var` can be re-declared within the same scope without any issues. The later declaration will overwrite the earlier one.
- `let`: Variables declared with `let` cannot be re-declared within the same scope. Attempting to do so will result in a SyntaxError.

Example:

```javascript
var a = 5;
var a = 10; // No error, a is re-declared

let b = 15;
let b = 20; // SyntaxError: Identifier 'b' has already been declared
```

Due to the block-scoping nature and absence of re-declaration, `let` is generally considered safer and more predictable than `var`. It's recommended to use `let` for variable declarations in modern JavaScript to avoid common pitfalls associated with `var`.

### Q.4 What are the major features introduced in ECMAScript 6?

> ECMAScript 6, also known as ES6 or ECMAScript 2015, is a major update to the JavaScript language specification. It introduced several new features and enhancements to the language to make it more powerful, expressive, and easier to work with. Some of the major features introduced in ECMAScript 6 include:

1. **Block-Scoped Declarations (let and const):** The `let` and `const` keywords were introduced to declare variables with block-level scoping, as opposed to the function-level scoping of `var`. `let` allows reassignment of values, while `const` is used to declare constants that cannot be reassigned.

2. **Arrow Functions:** Arrow functions provide a concise syntax for writing function expressions. They use a shorter syntax and automatically capture the `this` context lexically, which helps in avoiding the pitfalls of `this` scoping in regular functions.

3. **Classes:** ES6 introduced the `class` keyword to declare classes in a more classical object-oriented programming style. It simplifies the prototype-based inheritance model of JavaScript and provides a more familiar syntax for defining classes.

4. **Modules:** ES6 introduced native support for modules, allowing developers to define and export modules using `import` and `export` statements. This enhances code organization, reusability, and maintainability.

5. **Enhanced Object Literals:** Object literals gained new features, such as shorthand property names, computed property names, and concise methods, making object creation and manipulation more expressive and concise.

6. **Default Parameters:** ES6 allows developers to define default parameter values for function arguments, simplifying the process of handling missing or undefined parameters.

7. **Rest and Spread Operators:** The rest operator (`...`) allows a function to accept multiple arguments as an array, while the spread operator (`...`) can be used to spread an array into individual elements or to merge objects and arrays.

8. **Destructuring Assignment:** Destructuring provides a convenient way to extract data from arrays and objects into distinct variables, making it easier to work with complex data structures.

9. **Template Literals:** Template literals allow developers to create multi-line strings and embed expressions inside them using `${}`. They provide a more readable and flexible alternative to traditional string concatenation.

10. **Promises:** Promises provide a cleaner and more structured approach to handling asynchronous operations, making it easier to reason about and handle asynchronous tasks.

11. **Symbol:** The `Symbol` data type was introduced to create unique and immutable identifiers. It's often used as keys for object properties to prevent name collisions.

12. **Iterators and Generators:** ES6 introduced iterators and generators, which allow developers to define custom iteration behavior for objects and collections. Generators simplify the creation of iterators using the `function*` syntax.

These are just some of the major features introduced in ECMAScript 6. Subsequent ECMAScript versions have continued to add new features and improvements to the language. ES6 laid the foundation for many modern JavaScript practices and significantly improved the language's capabilities.

### Q.5 What is the difference between let and const ?

> In most programming languages, including JavaScript, `let` and `const` are used to declare variables. However, they have some key differences in terms of their behavior and use:

1. **Mutability:**

   - `let`: Variables declared with `let` are mutable, which means their values can be changed or reassigned during the program's execution. You can update the value of a variable declared with `let`.
   - `const`: Variables declared with `const` are immutable, which means their values cannot be changed once they are assigned. Once a value is assigned to a `const` variable, it cannot be reassigned or modified.

2. **Block Scope:**

   - Both `let` and `const` have block scope, which means they are only accessible within the block (enclosed by curly braces) where they are defined. This scope behavior applies to `if`, `for`, `while` loops, and any other code block.
   - `let` and `const` variables defined within a block are not accessible outside that block.

3. **Hoisting:**

   - Both `let` and `const` are hoisted to the top of their respective block, but they are not initialized until the actual declaration statement is encountered during runtime. This means you cannot access the variable before its declaration statement, as it would result in a "ReferenceError."

4. **Global Object Property:**

   - When `let` and `const` variables are declared in the global scope (outside of any function or block), they do not become properties of the global object (e.g., `window` object in browsers). However, if `var` is used to declare a variable in the global scope, it becomes a property of the global object.

5. **Temporal Dead Zone (TDZ):**

   - Both `let` and `const` have a Temporal Dead Zone (TDZ), which means that you cannot access or use the variable before its declaration in the code. Trying to access a variable within its TDZ will result in a "ReferenceError."

6. **Reassignment:**
   - `let`: Allows you to reassign a new value to the variable.
   - `const`: Does not allow reassignment after declaration, making it suitable for defining constants or values that should not change.

Here's a basic example to illustrate the differences:

```javascript
let x = 10;
x = 20; // Valid, x can be reassigned

const y = 30;
y = 40; // Invalid, you cannot reassign a const variable after its declaration
```

In general, it's a good practice to use `const` when you know that the variable's value should not change and use `let` for variables whose values might need to be updated or reassigned. This helps in writing safer and more maintainable code.

### Q.6 What is template literals in ES6 and how do you use them?

> Template literals, also known as template strings, are a feature introduced in ECMAScript 6 (ES6) for JavaScript. They provide a more convenient and expressive way to create strings by allowing embedded expressions and multiline strings. Template literals are enclosed by backticks (`` ` ``) instead of single or double quotes used for regular strings.

The syntax for template literals is as follows:

```javascript
const variable = `This is a template literal`;
```

To include expressions within template literals, you use `${}` to enclose the expression. The expression inside `${}` will be evaluated, and its result will be included in the string:

```javascript
const name = "Alice";
const age = 30;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is Alice and I am 30 years old.
```

Template literals can also be used for multiline strings, which is especially helpful when dealing with large chunks of text:

```javascript
const multilineString = `
  This is a multiline
  string using template literals.
  It allows you to easily write
  strings spanning multiple lines.
`;
console.log(multilineString);
/* Output:
  This is a multiline
  string using template literals.
  It allows you to easily write
  strings spanning multiple lines.
*/
```

Template literals provide a more concise and readable way to build strings, especially when you need to concatenate multiple values or include dynamic content within the string. They are widely used in modern JavaScript code for creating dynamic HTML templates, API endpoints, and any other scenarios where string interpolation and multiline strings are required.

### Q.7 What’s difference between map & forEach?

> Both `map()` and `forEach()` are array methods in JavaScript, but they serve different purposes and have different behaviors:

1. **Purpose:**

   - `map()`: The `map()` method is used to iterate over an array and create a new array based on the transformation of each element in the original array. It returns a new array with the same number of elements as the original array, but each element can be modified based on the provided callback function.
   - `forEach()`: The `forEach()` method is used to iterate over an array and perform an action or operation on each element of the array. It does not create a new array and is typically used when you want to perform some side effect or action for each element without modifying the original array.

2. **Return Value:**

   - `map()`: It returns a new array containing the results of calling the provided function on each element of the original array.
   - `forEach()`: It does not return anything. The return value of `forEach()` is always `undefined`. It simply iterates over the array and executes the provided callback function for each element.

3. **Usage:**
   - `map()`: Use `map()` when you want to transform each element of an array into something else and create a new array with the transformed values.
   - `forEach()`: Use `forEach()` when you want to perform some operation on each element of the array, like logging the elements, updating the elements in place, or executing some other side effect.

Examples:

Using `map()`:

```javascript
const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8]
```

Using `forEach()`:

```javascript
const colors = ["red", "green", "blue"];

colors.forEach((color) => {
  console.log(color);
});
// Output:
// red
// green
// blue
```

4. **Chaining:**
   - `map()`: Since `map()` returns a new array, you can chain other array methods after it.
   - `forEach()`: Since `forEach()` returns `undefined`, it cannot be directly chained with other array methods.

```javascript
const numbers = [1, 2, 3];

const doubledAndSquared = numbers
  .map((num) => num * 2) // [2, 4, 6]
  .map((num) => num ** 2); // [4, 16, 36]

console.log(doubledAndSquared); // Output: [4, 16, 36]
```

In summary, use `map()` when you want to transform elements into a new array, and use `forEach()` when you want to perform an operation on each element without creating a new array.

### Q.8 How can you destructure objects and arrays in ES6?

> In ES6 (ECMAScript 2015) and later versions of JavaScript, you can use destructuring syntax to extract values from objects and arrays into separate variables. This provides a more concise and expressive way of working with complex data structures. Here's how you can destructure objects and arrays:

**Destructuring Objects:**

Suppose you have an object like this:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
```

To extract values from the `person` object into separate variables, you can use the curly braces `{}`:

```javascript
const { firstName, lastName, age } = person;

console.log(firstName); // Output: John
console.log(lastName); // Output: Doe
console.log(age); // Output: 30
```

You can also use different variable names while destructuring:

```javascript
const { firstName: fName, lastName: lName, age: personAge } = person;

console.log(fName); // Output: John
console.log(lName); // Output: Doe
console.log(personAge); // Output: 30
```

If the property you are trying to destructure does not exist in the object, the resulting variable will be `undefined`.

**Destructuring Arrays:**

Consider the following array:

```javascript
const numbers = [1, 2, 3, 4, 5];
```

To extract values from the `numbers` array into separate variables, you can use square brackets `[]`:

```javascript
const [first, second, third, fourth, fifth] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3
console.log(fourth); // Output: 4
console.log(fifth); // Output: 5
```

You can also use the rest pattern (`...`) to capture the remaining elements of the array into a separate variable:

```javascript
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

If the array has fewer elements than the number of variables you are trying to assign, the resulting variables will be `undefined`.

Destructuring can significantly simplify your code, especially when dealing with large and complex data structures, allowing you to extract the required values directly into variables for further manipulation.

### Q.9 How can you define default parameter values in ES6 functions?

> In ES6 and later versions of JavaScript, you can define default parameter values for function parameters. Default parameter values allow you to specify a default value that will be used if the function is called without providing a value for a specific parameter or if the argument passed is `undefined`. This feature provides a convenient way to handle optional parameters in functions. Here's how you can define default parameter values:

**Syntax:**

```javascript
function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2, ...) {
  // Function code here
}
```

**Example:**

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
```

In the `greet()` function above, the `name` parameter has a default value of `'Guest'`. If the function is called without providing a value for the `name` parameter, it will use the default value `'Guest'`.

You can also use expressions as default values:

```javascript
function calculateTotal(price, taxRate = 0.1, discount = 0) {
  return price + price * taxRate - discount;
}

console.log(calculateTotal(100)); // Output: 110 (10% tax applied)
console.log(calculateTotal(100, 0.05)); // Output: 105 (5% tax applied)
console.log(calculateTotal(100, 0.1, 20)); // Output: 90 (10% tax applied, $20 discount)
```

When using default parameters, it's important to note that `undefined` is the only value that triggers the default. In other words, if you explicitly pass `null`, `false`, an empty string (`''`), or any other falsy value as an argument, the default value will not be used, and the provided value will be used instead.

```javascript
function example(param = "default") {
  console.log(param);
}

example(null); // Output: null
example(false); // Output: false
example(""); // Output: ''
example(undefined); // Output: default (default value is used)
example(); // Output: default (default value is used)
```

By utilizing default parameter values, you can make your functions more flexible and avoid common issues that arise when calling functions with missing or undefined arguments.

### Q.10 What is the purpose of the spread operator (...) in ES6?

> In ES6 (ECMAScript 2015) and beyond, the spread operator `...` is a powerful feature that provides a concise and convenient way to manipulate arrays and objects. It allows you to spread the elements of an iterable (e.g., an array or a string) or the properties of an object into another array or object. The spread operator is incredibly versatile and serves various purposes:

**1. Spreading Elements of an Array:**

The spread operator can be used to "spread" the elements of an array into another array. It creates a shallow copy of the original array, making it useful for tasks like concatenation or creating new arrays based on existing ones.

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

**2. Spreading Elements of a String:**

The spread operator can also be used with strings to spread each character of the string into an array.

```javascript
const str = "hello";
const charArray = [...str];
console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']
```

**3. Spreading Object Properties:**

The spread operator can be used to clone or merge objects. When used in object literals, it spreads the properties of one object into another.

```javascript
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { x: 1, y: 2, z: 3 }
```

**4. Function Arguments:**

The spread operator can be used to pass an array of values as arguments to a function, instead of passing each value individually.

```javascript
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers); // Equivalent to sum(1, 2, 3)
console.log(result); // Output: 6
```

**5. Array and Object Destructuring:**

The spread operator can also be used for array and object destructuring, to capture the remaining elements or properties into a separate variable.

```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

```javascript
const obj = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, ...rest } = obj;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: { c: 3, d: 4 }
```

The spread operator is a versatile and valuable tool in modern JavaScript, making it easier to work with arrays, objects, and function arguments in a more concise and expressive way.
