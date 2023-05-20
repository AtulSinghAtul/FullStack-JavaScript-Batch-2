> # Placement Assignment\_(Atul Singh)

---

## <= EXPRESS QUESTIONS=>

- Answer 1 :-
  [Create a simple server using Express and connect with backend and create an endpoint
  “/post” which sends 20 posts](<https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/tree/main/Placement%20Assignment_(Atul%20Singh)/express-questions/answer-1>)

---

- Answer 2 :- [Explain a middleware and create a middleware that checks is user authenticated or not
  then send data of post](<https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/tree/main/Placement%20Assignment_(Atul%20Singh)/express-questions/answer-2/Middleware-Authentication-App>)
  `As implied by the name, middleware acts as a bridge. Middleware is a function or utility function (middleware function) that intercepts a request in the middle and calls a utility function. These middleware functions execute our middleware code to perform actions (such as authentication and authorization). `

![auth-middleware](https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/assets/112545072/1eddb768-5590-468a-9067-e0fb67badc00)


- Answer 3 :-
  [Created a backend for blog app, where user can perform crud operations](<https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/tree/main/Placement%20Assignment_(Atul%20Singh)/express-questions/answer-3/backendForBlogApp>)

---

- Answer 6 :- [ authentication-app-using-jwt](<https://github.com/AtulSinghAtul/FullStack-JavaScript-Batch-2/tree/main/Placement%20Assignment_(Atul%20Singh)/express-questions/answer-6/Authentication-App>)

  `JSON  Web Tokens (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties and JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be used to securely authenticate users, verify their identity, and provide access to authorized resources.`

  ` JWTs are composed of three parts: aheader, a payload and a signature. The header typically containes the type of the token (JWT), and the signing algorithem used. The payload containes the data being transmitted, such as the user's ID or Email address. The signature is created by hashing the header and payload using a secret key, which can be used to verify the authenticity of the token.`

  `When a user log into a web application, the server generates a JWT and sends it to the client as aresponse. The client can then include the JWT in the Headers of subsequent requests to the server. tje server can veify the authenticity of the token by checking the signature and decoding the payload.`

  `JWTs are commomnly used in Single Sign-On(SSO) systems, where a user can authenticate once and access multiple web applications without having to re-enter their credentials. They are also used in token-based authentication systems, where the token is used insted of a username and password. `
