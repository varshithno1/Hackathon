const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minLength: 3,
    maxLength: 30,
  },
  isUser: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  profilePic: {
    type: String,
    default: "",
  },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "events" }],
});

const userDB = mongoose.model("users", AccountSchema);

module.exports = userDB;
