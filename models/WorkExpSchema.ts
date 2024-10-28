import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Prepare the Work Experience Schema -
/*
    eduUserID - ref<User>
    companyName
    role
    startDate
    endDate
    workDescription
    workType = [Part-time | Full-time | Internship | Freelance]
    workLocation = [Remote | <customLocation>]
*/

const workExpSchema = new Schema({
  eduUserID: { type: Schema.Types.ObjectId, ref: "User" },
  companyName: { type: String, required: true },
  role: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  workDescription: { type: String },
  workType: {
    type: String,
    enum: ["Part-time", "Full-time", "Internship", "Freelance"],
  },
  workLocation: { type: String, default: "" },
  isRemote: { type: Boolean, default: false },
});

export const WorkExperience = model("WorkExperience", workExpSchema);
