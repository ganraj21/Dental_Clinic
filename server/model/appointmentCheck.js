const mongoose = require("mongoose");

const userAppointment = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    min: 4,
    max: 15,
  },
  name: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    max: 20,
  },
  phone: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  time: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
});

module.exports = mongoose.model("appointment_info", userAppointment);
