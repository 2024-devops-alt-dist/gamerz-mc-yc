import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  pseudo: String, 
  email: String,
  password: String,
  isAccepted: Boolean,
  openToPlay: Boolean,
});

export const User = mongoose.model('User', userSchema)