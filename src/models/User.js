const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true
    },
    password:{
      type:"String",
    
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
