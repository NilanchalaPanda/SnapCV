import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Preparing the UserSchema -
/*
    userId
    name
    age
    profilePic
    emailID
    password
    isVerified
    isSubscribed
    expiresOn
    experience
    sections
*/

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  profilePic: { type: String, required: true },
  emailID: { type: String, required: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  isSubscribed: { type: Boolean, default: false },
  expiresOn: { type: Date, default: null },
  experience: { type: Number, default: 0 },
  sections: { type: Array, default: [] },
});

export const User = model("User", userSchema);
