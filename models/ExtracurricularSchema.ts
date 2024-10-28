import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Preparing the Extracurricular Schema -
/*
    extraCirUserID - ref<User>
    achievement - string
*/
const extracurricularSchema = new Schema({
  executiveSummaryID: { type: Schema.Types.ObjectId, ref: "User" },
  achievement: { type: String, required: true },
});

export const ExtraCurricular = model("ExtraCurricular", extracurricularSchema);
