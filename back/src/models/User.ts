import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// An interface that describes the properties
// that a User Document has

export interface UserDoc extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  tokens: { token: string }[];
}

// An interface that describes the properties
// that a User Model has

interface UserModel extends mongoose.Model<UserDoc> {
  generateAuthToken(): string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  tokens: { token: string }[];
}

const UserSchema = new Schema<UserDoc, UserModel>(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value: any) {
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
      validate(value: any) {
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
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.tokens;
      },
      versionKey: false,
    },
    timestamps: true,
  }
);

UserSchema.methods.generateAuthToken = async function (this: UserDoc) {
  try {
    const user = this;
    // console.log("process.env.JWT_KEY in***", process.env.JWT_KEY);
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_KEY!);
    // console.log("token", token);
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
  } catch (error) {
    console.log("error generateAuthToken", error);
  }
};

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Enable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Enable to login");
  }
  return user;
};

// Hash the plain text password before saving
UserSchema.pre<UserDoc>("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

// 6 min min
function hasNumber(myString: string): boolean {
  return /\d/.test(myString);
}

function hasUpperCase(str: string): boolean {
  return /[A-Z]/.test(str);
}