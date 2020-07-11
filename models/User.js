const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  msisdn: {
    type: Number,
    trim: true,
    required: true,
    min: 10,
    unique: true,
  },
  token: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
