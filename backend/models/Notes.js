const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  tag: { type: String, default: "General" },
});

module.exports = mongoose.model("Notes", notesSchema);
