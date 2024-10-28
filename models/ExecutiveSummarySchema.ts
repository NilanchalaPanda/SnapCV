import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Preparing the Executive Summary Schema -
/*
    summaryUserID - ref<User>
    context - string
*/
const ExecutiveSummarySchema = new Schema({
  summaryUserID: { type: Schema.Types.ObjectId, ref: "User" },
  context: { type: String, required: true },
});

export const ExecutiveSummary = model("ExecutiveSummary", ExecutiveSummarySchema);
