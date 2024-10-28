import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Preparing the Admin Schema
/*
    name
    emailID
    password
    userList - ref<User>
*/

const adminSchema = new Schema({
  name: { type: String, required: true },
  emailID: { type: String, required: true },
  password: { type: String, required: true },
  userList: { type: Schema.Types.ObjectId, ref: "User" },
});

export const Admin = model("Admin", adminSchema);
