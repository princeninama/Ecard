import mongoose from "mongoose";

const schema = new mongoose.Schema({
  Bride_name: {
    type: String,
    required: true,
  },
  Groom_name: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  Wedding_Date: {
    type: Date,
    required: true,
  },
  dates: {
    type: [Date],
    default: [],
  },
  eventname: {
    type: [String],
    default: [],
  },
  invitedBy: {
    type: [String],
    default: [],
  },
  photos: {
    type: [String],
    default: [],
  },
  map_url: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

export const Ecard = mongoose.model("Ecard", schema);
