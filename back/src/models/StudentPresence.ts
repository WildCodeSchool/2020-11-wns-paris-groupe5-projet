import mongoose, { Schema, Document } from "mongoose";

export interface StudentDoc extends Document {
  courseName: string;
  students: { studentId: mongoose.Schema.Types.ObjectId; isMissed: boolean }[];
}

const StudentPresence = new Schema<StudentDoc>(
  {
    courseName: String,
    students: [
      {
        studentId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "student" },
        isMissed: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model<StudentDoc>("records", StudentPresence);
// 