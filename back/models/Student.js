const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String
});

module.exports = mongoose.model("student", StudentSchema);
