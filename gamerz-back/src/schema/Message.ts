import mongoose  from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
    message: String, 
    timestamp: {type: Date, default: Date.now},
    idUser: [{ type: Schema.Types.ObjectId, ref: "User"}],
    idChatroom: [{ type: Schema.Types.ObjectId, ref: "Chatroom"}]
})

export const Message = mongoose.model('Message', messageSchema)