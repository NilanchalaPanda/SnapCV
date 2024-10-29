import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Preparing the HeaderSchema -
/*
    headerUserID - ref<userID>
    name
    phoneNo
    emailID
    githubLink?
    linkedInLink?
    address?
*/

const headerSchema = new Schema({
  headerUserID: { type: Schema.Types.ObjectId, ref: "User" },
  fullName: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  emailID: { type: String, required: true },
  githubLink: { type: String },
  linkedInLink: { type: String },
  address: { type: String },
});

export const Header = model("Header", headerSchema);
