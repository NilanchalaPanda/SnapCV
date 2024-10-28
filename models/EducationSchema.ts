import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Prepare the Education Schema -
/*
    eduUserID - ref<User>
    collegeName
    degree
    score
    fieldOfStudy
    collegeLocation?
    endDate
    description?
*/

const educationSchema = new Schema({
  eduUserID: { type: Schema.Types.ObjectId, ref: "User" },
  collegeName: { type: String, required: true },
  degree: { type: String, required: true },
  score: { type: Number, required: true },
  fieldOfStudy: { type: String, required: true },
  endDate: { type: Date, default: null, required: true },
  collegeLocation: { type: String, default: null },
  description: { type: String, default: null },
});

export const Education = model("Education", educationSchema);
