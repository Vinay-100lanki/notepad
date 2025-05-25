const connectToMongoDB = require("./db");

connectToMongoDB();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000; 

app.get("/", (req, res) => {
  res.send("Welcome to the Notepad Backend!");
});
app.get("/api/login", (req, res) => {
  res.send("Welcome to the login page!");
});
app.get("/api/signup", (req, res) => {
  res.send("Welcome to the signup page!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});