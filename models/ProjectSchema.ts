import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Prepare the Work Experience Schema -
/*
    projUserID - ref<User>
    projectName
    techStack
    projDescription
    githubLink?
    deployedLink?
*/

const projectSchema = new Schema({
  projUserID: { type: Schema.Types.ObjectId, ref: "User" },
  projectName: { type: String, required: true },
  techStack: { type: String, required: true },
  projDescription: { type: String, required: true },
  githubLink: { type: String },
  deployedLink: { type: String },
});

export const Project = model("Project", projectSchema);
