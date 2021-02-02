import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const User = require('../../models/User');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  firstName :"Ibrahima",
  lastName: "Niass",
  email: "cheroubawan2@hotmail.fr",
  phoneNumber: "00337583258",
  password: "Jesuis1Top",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }
  ]
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
  _id: userTwoId,
  firstName: 'fatou',
  lastName:'Diop',
  email: 'fatou@example.com',
  phoneNumber:'0578648976',
  password: 'guessiteasy1A',
  tokens: [
    {
      token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }
  ]
};


const setUpDatabase = async () => {
  await User.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();

};

module.exports = {
  userOneId,
  userTwoId,
  userOne,
  userTwo,
  setUpDatabase,
};
