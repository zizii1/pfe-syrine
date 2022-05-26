const mongoose = require("mongoose");

const users = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    organization: String,
    country: String,
    department: String,
    password: String,
    confirmePassword: String,
    email: String,
    contact: Number,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Users", users);
