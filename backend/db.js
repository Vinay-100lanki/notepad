const mongoose = require("mongoose");
const mongooseURI = process.env.MONGODB_URI || "mongodb://localhost:27017/notepad";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongooseURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB at", mongooseURI);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectToMongoDB;