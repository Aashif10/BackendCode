const mongoose = require("mongoose");
const validator = require("validator");

const PostSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name must contain at least 3 characters!"],
    maxLength: [15, "First Name cannot exceed 15 characters!"]
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name must contain at least 3 characters!"],
    maxLength: [15, "Last Name cannot exceed 15 characters!"]
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email!"]
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "phone number must be contain 10 digits not less than"],
    maxLength: [10, "phone number must be contain  10 digits not more than"]
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("details", PostSchema);
