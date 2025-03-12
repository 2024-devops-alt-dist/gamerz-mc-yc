import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  pseudo: String, 
  email: String,
  password: String,
  isAccepted: Boolean,
  openToPlay: Boolean,
  motivation: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "cancelled", "validated"],
    default: "pending",
  },
});

export const User = mongoose.model('User', userSchema)