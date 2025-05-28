const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true , unique: true },
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
User.createIndexes();

module.exports = User;

// This code defines a Mongoose schema for a User model in a MongoDB database.
// The schema includes fields for username, name, password, email, and date of creation.