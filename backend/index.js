const connectToMongoDB = require("./db");

connectToMongoDB();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000; 

// Middleware to parse JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Notepad Backend!");
});
app.get("/api/login", (req, res) => {
  res.send("Welcome to the login page!");
});
app.get("/api/signup", (req, res) => {
  res.send("Welcome to the signup page!");
});

app.use('/api/auth', require('./routes/auth'));
// app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});