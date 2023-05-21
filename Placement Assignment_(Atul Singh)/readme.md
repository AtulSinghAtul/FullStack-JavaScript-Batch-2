> # Placement Assignment\_(Atul Singh)

---

## <= EXPRESS QUESTIONS=>

- ## Answer 1 Express ->
  [Create a simple server using Express and connect with backend and create an endpoint
  “/post” which sends 20 posts](<https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/tree/main/Placement%20Assignment_(Atul%20Singh)/express-questions/answer-1>)

---

- ## Answer 2 Express -> [Explain a middleware and create a middleware that checks is user authenticated or not
  then send data of post](<https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/tree/main/Placement%20Assignment_(Atul%20Singh)/express-questions/answer-2/Middleware-Authentication-App>)
  `As implied by the name, middleware acts as a bridge. Middleware is a function or utility function (middleware function) that intercepts a request in the middle and calls a utility function. These middleware functions execute our middleware code to perform actions (such as authentication and authorization). `

![auth-middleware](https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/assets/112545072/1eddb768-5590-468a-9067-e0fb67badc00)

---

- ## Answer 3 Express ->
  [Created a backend for blog app, where user can perform crud operations](<https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/tree/main/Placement%20Assignment_(Atul%20Singh)/express-questions/answer-3/backendForBlogApp>)

---

- ## Answer 4 Express ->

  `What is the difference between authentication and authorization?`

  ` As mentioned, authentication and authorization may sound alike, but each plays a different role in securing systems and data. Unfortunately, people often use both terms interchangeably as they both refer to system access. However, they are distinct processes. Simply put,` **one (authentication) verifies the identity of a user or service before granting them access, while the other(authorization) determines what they can do once they have access**.
  `The best way to illustrate the differences between the two terms is with a simple example. Let's say you decide to go and visit a friend's home. On arrival, you knock on the door, and your friend opens it. She recognizes you (authentication) and greets you. As your friend has authenticated you, she is now comfortable letting you into her home. However, based on your relationship, there are certain things you can do and others you cannot (authorization). For example, you may enter the kitchen area, but you cannot go into her private office. In other words, you have the authorization to enter the kitchen, but access to her private office is prohibited.`

---

- ## Answer 5 Express ->

`What is he difference between common JS and EJS module? `

## CommonJS modules

`Common js is mainly used in server-side JS app with Node, as browser don't support the use of CommonJS.`

`Node only support to commonJS to implement modules, but now days it also support ESmodules which is a more modern approach.
`

`So let,s see how CommonJS looks in actual code.`

`To implement modules , you need a Node aap on your computer first. So create Node app using commond: `

<mark> npm init -y

`First let's create a main.js file with a simple function in it.`

```
const testFunction = () => {
    console.log('Im the main function')
}

testFunction()
```

`Ok now let's say we want to have another function called from our main file, but we don't want the function in it as it's not part of our core feature. For this, let's create a mod1.js file and add this code to it:`

```
const mod1Function = () => console.log('Mod1 is alive!')
module.exports = mod1Function
```

`module.exports is the keyword we use to declare all we want to export from that file.`

`To use this function in our main.js file, we can do it like this:`

```
mod1Function = require('./mod1.js')

const testFunction = () => {
    console.log('Im the main function')
    mod1Function()
}

testFunction()
```

`See that we declare whatever we want to use and then assign that to the require of the file we want to use. Piece of cake.`

`If we wanted to export more than one thing from a single module, we can do it like this:`

```
const mod1Function = () => console.log('Mod1 is alive!')
const mod1Function2 = () => console.log('Mod1 is rolling, baby!')

module.exports = { mod1Function, mod1Function2 }
```

`And on the main.js file we can use both functions like this:`

```
({ mod1Function, mod1Function2 } = require('./mod1.js'))

const testFunction = () => {
    console.log('Im the main function')
    mod1Function()
    mod1Function2()
}

testFunction()
```

`And that's pretty much it. Quite simple, right? It is simple but it's a powerful tool to use. =)`

## ESmodules

`Now let's talk about ESmodules. Esmodules is a standard that was introduced with` **ES6(2015)** `The idea was to standarize how JS modules work and implement this features in browsers (which didn't previously support modules).`

`ESmodules is a more modern approach that is currently supported by browser and server-side apps with Node.`

`Let's see this in code. Once again we start by creating a Node app with`

```
 npm init -y
```

`Now we go to our` package.json `and add` "type": "module" `to it, like this:`

```
{
  "name": "modulestestapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module"
}
```

`If we don't do this and try to implement ESmodules on Node, we'll get an error like this:`

```
(node:29568) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
...
SyntaxError: Cannot use import statement outside a module
```

`Now let's repeat the exact same example. In our main.js file we'll have the following code:`

```
// main.js
import { mod1Function } from './mod1.js'

const testFunction = () => {
    console.log('Im the main function')
    mod1Function()
}

testFunction()
```

`And on mod1.js we'll have this:`

```
// mod1.js
const mod1Function = () => console.log('Mod1 is alive!')
export { mod1Function }
```

**Notice instead of `require` we're using `import` and instead of `module.exports` we're using `export`. The syntaxt is a bit different but the behaviour is very similar.**

`Again if we wanted to export more than one thing from the same file we could do it like this:`

```
// main.js
import { mod1Function, mod1Function2 } from './mod1.js'

const testFunction = () => {
    console.log('Im the main function')
    mod1Function()
    mod1Function2()
}

testFunction()
```

```
/ mod1.js
const mod1Function = () => console.log('Mod1 is alive!')
const mod1Function2 = () => console.log('Mod1 is rolling, baby!')

export { mod1Function, mod1Function2 }
```

`Another feature available in ESmodules is import renaming, which can be done like this:`

```
// main.js
import { mod1Function as funct1, mod1Function2 as funct2 } from './mod1.js'

const testFunction = () => {
    console.log('Im the main function')
    funct1()
    funct2()
}

testFunction()
```

`Notice we use the as keyword after each function, and then rename it however we want. Later in our code, we can use that new name instead of the original name the import has. ;)`

`Another thing you could do is import all exports together and put them together in an object, like this:`

```
// main.js
import * as mod1 from './mod1.js'

const testFunction = () => {
    console.log('Im the main function')
    mod1.mod1Function()
    mod1.mod1Function2()
}

testFunction()
```

`This may be useful in cases when, throughout our code, we want to be explicit about where each import is coming from. See that functions are now being called like` <mark>mod1.mod1Function().

`The last thing worth mentioning is the default keyword. With it we can set a default export for a given module. Like this:`

```
// mod1.js
const mod1Function = () => console.log('Mod1 is alive!')
const mod1Function2 = () => console.log('Mod1 is rolling, baby!')

export default mod1Function
export { mod1Function2 }
```

`And what does it mean to have a default export? Well, it means we don't have to destructure it when we import it. We can use it just like this:`

```
// main.js
import mod1Function, { mod1Function2 } from './mod1.js'

const testFunction = () => {
    console.log('Im the main function')
    mod1Function()
    mod1Function2()
}

testFunction()
```

`We can even rename the import whatever we want without the` **as** `keyword, since JavaScript "knows" that if we're not destructuring we'll be referring to the default import.`

```
// main.js
import lalala, { mod1Function2 } from './mod1.js'

const testFunction = () => {
    console.log('Im the main function')
    lalala()
    mod1Function2()
}

testFunction()
```

`And that pretty much sums it up about ESmodules too. Straightforward I hope. =)`

## Major difference between CommonJS and ES module:

- `CommonJS is synchronous whereas ES is asynchronous`

- `CommonJS supports only runtime resolution whereas ES supports both parse time and runtime`

- `ES supports interoperability whereas CommonJS doesn't`

- `CommonJS is the default standard whereas ES recently achieved stable support`

- `Common JS uses require() on the other hand ES uses import export`

---

- ## Answer 6 Express -> [ authentication-app-using-jwt](<https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/tree/main/Placement%20Assignment_(Atul%20Singh)/express-questions/answer-6/Authentication-App>)

  `JSON  Web Tokens (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties and JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be used to securely authenticate users, verify their identity, and provide access to authorized resources.`

  ` JWTs are composed of three parts: aheader, a payload and a signature. The header typically containes the type of the token (JWT), and the signing algorithem used. The payload containes the data being transmitted, such as the user's ID or Email address. The signature is created by hashing the header and payload using a secret key, which can be used to verify the authenticity of the token.`

  `When a user log into a web application, the server generates a JWT and sends it to the client as aresponse. The client can then include the JWT in the Headers of subsequent requests to the server. tje server can veify the authenticity of the token by checking the signature and decoding the payload.`

  `JWTs are commomnly used in Single Sign-On(SSO) systems, where a user can authenticate once and access multiple web applications without having to re-enter their credentials. They are also used in token-based authentication systems, where the token is used insted of a username and password. `

---

- ## Answer 7 Express ->

`What should we do with the password of a user before storing it into DB?`

## How the passwords are stored in the DB

`So it's obvious that we can't store the password in plain text. We all agree here without any doubt.`

> ### We have to covert the clear text password into some secret form

`We have two approaches for that`

**1. Hashing-** `It's one way, means we can't get back the clear text password back from the secret.`

**2. Encryption-** `It's one way, means we can't get back the clear text password back from the secret.`

If we pass the clear text password through `HASHING / ENCRYPTION`, both generate the secret but the difference lies in whether we can get back the clear text password or not.

`So imagine we are using encryption, and somehow passwords got leaked and hackers got the private-key/pattern that was used to encrypt the password then they can easily decrypt the password and get the every clear text password which is a huge risk.`

`Now come to HASHING, it's one way so even if passwords got leaked the hackers won't be able to get back the clear text password and so it's not of any use to hacker. We are safe even if data got leaked.`

`And this you can see in your real life if you call customer-care of the bank(or any institute you have account with) and ask for password they can't tell that because it's not in clear text and only option is to reset the password.`

> Only the USER/CUSTOMER knows the password.

`We can use encryption for general purpose which the systems need to decrypt, like Whatsapp chats are stored in encrypted form and when rendering on the screen they are decrypted on the fly.`

**The important question is why hashed passwords can't be restored back -**

- There is complex mathematical computation in place at different layers.

- Multiple passwords can result in the same hashed secret.

**How the password validation happens**

`We have 2 ways-`

`1.` Decrypt the stored password and compare it with user entered password,

`2.` Hash the user entered password and compare this hash with the one stored in the DB.

As we have seen getting back the clear text password from the hashed is impossible in real time so option#1 is not feasible. **Option#2 is used to validate the password**. And this is something that we don't have to do manually the hashing algorithm libraries provides us the way to validate the passwords as well. We have to pass the clear text and hashed password and it will return the result accordingly.

`Now before looking at different secure hashing algorithms lets understand few terms related to secure storage of password -`

## Salting

`It's unique randomly generated string added to the passwords before generating hash.`

> Every password has its own unique salt which is stored along with the hashed password

It provides one extra layer of security so attacker has to crack hashes one at a time using the respective salt rather than calculating a hash once and comparing it against every stored hash. Earlier we needed to add the salt manually at the time of generating hash of the password but modern hashing algorithms such as `Argon2id, bcrypt,` and `PBKDF2 `automatically salt the passwords, so no additional steps are required when using them.

## Peppering

It's combination of hashing and encryption. Once hashes are generated usually but before storing they are encrypted with some private key. This process of adding encryption is `Peppering` and private key is referred as `Pepper`

> Pepper is same for all the passwords unlike salt which was different for each password.

> Pepper must be stored in secret vaults which is different from DB

> Pepper can be rotated as and when needed.

`Peppering gives one more additional layer of security because now hacker has to get both database passwords as well as private key.`

You can see in the above diagram there is one more layer of decryption added which makes life of hacker even more harder

## Work factor

`It's the number of iterations that can be added to make calculation of hashing even more difficult. In simple terms if work factor is 10 it will be do 10 iterations to calculate the hash and if it's 20 then it will do the 20 iterations to calculate the hash. So here we can see the attacker will have to spent more resources/time to validate each hash.`

> Adding more work factor will make usual user validation slow so it must be chosen carefully to maintain the balance between security and usability.

`Different Hashing algorithms that can be used here. (Most recommended at the top, use as per availability)`

- Argon2
- Bcrypt
- Scrypt
- PBKDF2
- SHA-\*
- MD5

---

- ## Answer 8 Express ->

`Whats event loop in NodeJS ?`

Despite the fact that JavaScript is single-threaded, Node.js uses an event loop to perform non-blocking I/O operations.

`A thread is automatically established whenever we launch a Node program. This thread will be the sole one where our complete codebase will be run. The event loop is generated inside of it. This loop's job is to figure out which operations our single thread should be performing at any given time. `

`Most operating systems are multi-threaded, so they can handle many background tasks. The kernel tells Node.js when one of the operations is complete, as well as the callbacks linked with such an action is pushed towards the event loop, where it can be processed later. `

`Event Loop features include:`

- This event loop is just not a loop which waits for tasks, performs them, and then rests until new ones occur.

- The event loop executes tasks first from event queue while the call stack is empty, i.e. there are no ongoing tasks.

- With both the event loop, we can use callbacks and promises.

```
Example:

console.log("This is the first statement");
setTimeout(function(){
console.log("This is the second statement");
}, 1000);
console.log("This is the third statement");
Output:
```

This is the first statement

This is the third statement

This is the second statement

`In the example above, a first console log line is pushed to the call stack, the console is logged with "This is the first statement," and the task is retrieved from the stack. The job is subsequently transmitted to the windows os, and the task's timer is established. This job is then deleted from the stack. `

`The third console log statement is then pushed to the call stack, and the console is logged with "This is the third statement," and the task is popped from the stack. `

`The callback is dispatched to the event queue when the timer set by the setTimeout function (in this example 1000 ms) expires. When the call stack is empty, the event loop takes the job at the top of the event queue and sends it to the call stack. The setTimeout function's callback function executes the instruction, logging "This is the second statement" on the console and removing the task from the stack.`

## Working of Event loop

`As Node.js launches, it first organises the event loop, next processes the supplied input script, sets up timers, and thereafter begins executing its event loop. The first data script included console.log() statements and a setTimeout() feature that set a timer. `

`To conduct async operations in Node.js, a special library module called libuv is utilised. This library is also used to handle the libuv thread pool, which is managed in conjunction with Node's back logic.`

`The thread pool consists of four threads that are used to delegate operations that are too large for the event loop to handle. I/O operations, such as opening and closing connections and setting timeouts, are examples.`

`When a task is completed by the thread pool, a callback function is invoked, which handles the error (if any) or performs some other operation. The event queue receives this callback function. The event goes through the event queue and delivers the callback to the call stack when the call stack is empty. `

![event loop](https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/assets/112545072/49cc2124-875d-4d5b-865e-6fb4492e5a15)

- ## Answer 9 Express ->
