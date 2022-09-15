const express = require("express");
const app = express();
const { resolve } = require("path");

app.use("/", express.static(resolve(__dirname, "./dist")));

app.listen(process.env.PORT || 3030, error => {
  if (error) return console.log(error);
  return console.log("Server running");
});
