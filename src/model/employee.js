import mongoose from "mongoose";
import validator from "validator";

const employeeSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please enter username"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: "${VALUE} is not a valid email",
    },
  },
  gender: {
    type: String,
    required: [true, "please enter gender"],
    enum: {
      values: ["Male", "Female"],
      message: "${VALUE} is not supported",
    },
  },
  phone: {
    type: String,
    required: [true, "Please enter phone number"],
    validate: {
      validator: (value) => validator.isMobilePhone(value),
      message: "${VALUE} is not a valid phone number",
    },
  },
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
