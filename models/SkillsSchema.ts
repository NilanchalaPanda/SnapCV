import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Preparing the Skills Schema
/*
    skillUserID - ref<User>
    languages
    libraries
    tools
    softSkills
*/

const skillsSchema = new Schema({
  skillUserID: { type: Schema.Types.ObjectId, ref: "User" },
  languages: { type: String, required: true },
  libraries: { type: String, required: true },
  tools: { type: String, required: true },
  softSkills: { type: String, required: true },
});

export const Skills = model("Skills", skillsSchema);
