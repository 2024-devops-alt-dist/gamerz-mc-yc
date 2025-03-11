import mongoose from "mongoose";
const { Schema } = mongoose;

const candidacySchema = new Schema({
  motivation: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "cancelled", "validated"],
    default: "pending",
  },
  idUser: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export const Candidacy = mongoose.model('Candidacy', candidacySchema)