> # Placement Assignment\_(Atul Singh)

---

## <= EXPRESS QUESTIONS=>

- Answer 6 :-

  `JSON  Web Tokens (JWT) is an o[en standard that defines acompact and self-contained way for securrly transmitting information between parties and JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be used to securely authenticate users, verify their identity, and provide access to authorized resources.`

  ` JWTs are composed of three parts: aheader, a payload and a signature. The header typically containes the type of the token (JWT), and the signing algorithem used. The payload containes the data being transmitted, such as the user's ID or Email address. The signature is created by hashing the header and payload using a secret key, which can be used to verify the authenticity of the token.`

  `When a user log into a web application, the server generates a JWT and sends it to the client as aresponse. The client can then include the JWT in the Headers of subsequent requests to the server. tje server can veify the authenticity of the token by checking the signature and decoding the payload.`

  `JWTs are commomnly used in Single Sign-On(SSO) systems, where a user can authenticate once and access multiple web applications without having to re-enter their credentials. They are also used in token-based authentication systems, where the token is used insted of a username and password. `
