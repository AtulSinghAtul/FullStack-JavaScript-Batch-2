const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

//middleware
app.use(express.json());

//mounting
const { createPost } = require("./controllers/createPost");

//listen server
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
