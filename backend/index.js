const connectToMongoDB = require("./db");
const cors = require("cors");

connectToMongoDB();

const express = require("express");
const app = express();
const port = 5000; 
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Welcome to the Notepad Backend!");
// });
// app.get("/api/login", (req, res) => {
//   res.send("Welcome to the login page!");
// });
// app.get("/api/signup", (req, res) => {
//   res.send("Welcome to the signup page!");
// });

app.use('/api/auth', require('./routes/auth'));
// app.use('/api/notes', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Notepad Server is running on port ${port}`);
});