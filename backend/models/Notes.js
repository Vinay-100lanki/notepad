const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  author: { type: String, required: true },
  tag: { type: String, default: "General" },
});

module.exports = mongoose.model("Notes", notesSchema);