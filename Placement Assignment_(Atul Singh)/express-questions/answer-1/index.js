const express = require("express");
const app = express();

require("dotenv")?.config();
const PORT = process?.env?.PORT;
console.log(PORT);

//middleware
app.use(express.json());

//mounting
const route = require("./routes/route");
app.use("api/v1", route);

//listen server
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
