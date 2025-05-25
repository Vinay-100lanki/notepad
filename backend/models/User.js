const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);

/*const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {type:String,
    required: true,
  },
  password: {type:String,
    required: true,
  },
  date: {type:Date,
    default: Date.now,
  },
  username: {type:String,
    required: true,
    unique: true,
  },
  email: {type:String,
    required: true,
    unique: true,
  },
 
});

module.exports = mongoose.model('User', userSchema);*/ 