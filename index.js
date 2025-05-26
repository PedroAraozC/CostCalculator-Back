const express = require("express");
const { connectToMongo } = require("./config/db");

const app = express();
const port = process.env.PORT || 3000;

connectToMongo();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
