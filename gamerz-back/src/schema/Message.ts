import mongoose  from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
    message: String,
    idUser: { type: Schema.Types.ObjectId, ref: "User", required: true},
    idChatroom: { type: Schema.Types.ObjectId, ref: "Chatroom", required: true}
}, {timestamps: true })

export const Message = mongoose.model('Message', messageSchema)