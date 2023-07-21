const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  gymId : {
    type : String,
    required : true,

  },
  profilePhoto: {
    type: String,
  },
  weight: {
    type: String,
  },
  height: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
  },
  plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plan",
  },
  planStartDate : {
    type: String,
    default : " "
  },
  planExpiryDate : {
    type: String,
    default : " "
  },
  attendance: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attendance",
    },
  ],
});

module.exports = mongoose.model("UserProfile", userProfileSchema);
