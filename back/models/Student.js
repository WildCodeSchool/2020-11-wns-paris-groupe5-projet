const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const StudentSchema = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    minlength: 7,
    required: true,
    trim: true,
    validate(value) {
      if (!hasNumber(value)) {
        throw new Error("must not include minimum a number");
      } else if (!hasUpperCase(value)) {
        throw new Error("must have a least one uppercase letter");
      } else if (value.length < 6) {
        throw new Error("must be 6 caracteres minimum");
      }
    },
  },
  phoneNumber: String,
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

StudentSchema.methods.generateAuthToken = async function () {
  const student = this;
  const token = jwt.sign({ _id: student._id.toString() }, process.env.JWT_SECRET);
  student.tokens = student.tokens.concat({ token });
  await student.save();
  return token;
};

// Hash the plain text password before saving
StudentSchema.pre("save", async function (next) {
  const student = this;
  if (student.isModified("password")) {
    student.password = await bcrypt.hash(student.password, 8);
  }
  next();
});

module.exports = mongoose.model("student", StudentSchema);

// 6 min min
function hasNumber(myString) {
  return /\d/.test(myString);
}

function hasUpperCase(str) {
  return /[A-Z]/.test(str);
}
