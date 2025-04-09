import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  pseudo: { type: String, required: true }, 
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  isAccepted: { type: Boolean, default: false },
  openToPlay: { type: Boolean, default: false },
  motivation: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "cancelled", "validated"],
    default: "pending",
  },
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

userSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

export const User = mongoose.model('User', userSchema)