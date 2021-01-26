const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentPresence = new Schema({
  courseName: String,
  students: [
    {
      studentId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "student" },
      isMissed: { type: Boolean, default: false },
    },
  ],
}, {timestamps: true});

module.exports = mongoose.model("records", StudentPresence);
