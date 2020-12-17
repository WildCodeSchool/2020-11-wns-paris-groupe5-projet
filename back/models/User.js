const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
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
}, {timestamps: true});

UserSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};


UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Enable to login');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Enable to login');
  }
  return user;
};

// Hash the plain text password before saving
UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});


const User = mongoose.model("User", UserSchema);
module.exports = User;

// 6 min min
function hasNumber(myString) {
  return /\d/.test(myString);
}

function hasUpperCase(str) {
  return /[A-Z]/.test(str);
}
