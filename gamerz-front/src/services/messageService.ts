import axios from "axios";
import { Message } from "../models/MessageModel";

const API = import.meta.env.VITE_API_URL;

export const createMessage = async (messageData: Message) => {
    try {
        const {message, senderId, chatroomId} = messageData
        console.log("message data depuis le service : ", message, senderId, chatroomId)
        await axios.post(`${API}/chatrooms/${chatroomId}/message`, 
            {message, chatroomId, senderId}, { withCredentials: true })
        
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        console.log(e.message)
    }
}