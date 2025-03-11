import mongoose from 'mongoose';
const { Schema } = mongoose;

const chatroomSchema = new Schema({
  title:  { type: String, required: true}, 
  description: String,
  members: [{ type: Schema.Types.ObjectId, ref: "User" }], // Liste des membres du salon
  idUser: { type: Schema.Types.ObjectId, ref: "User", required: true } // Référence au créateur
});

export const Chatroom = mongoose.model('Chatroom', chatroomSchema)