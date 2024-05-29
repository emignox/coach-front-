const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  year: Number,
  month: Number,
  day: Number,
  time: String,
  createdAt: { type: Date, default: Date.now },
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
  },
  email: { type: String, required: true, unique: true },
  appointments: [AppointmentSchema],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
