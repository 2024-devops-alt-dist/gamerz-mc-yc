import axios from "axios";

const API = "http://localhost:3000";

export const createChatroom = async (data: any) => {
    try {
        const {title, description} = data
        await axios.post(`${API}/new-chatroom`, 
            {title, description}, { withCredentials: true })
        
    } catch (e: any) {
        console.log(e.message)
    }
}

export const getAllChatrooms = async () => {
    try {
        const response = await axios.get(`${API}/chatrooms`)
        return response.data.chatrooms
        
    } catch (e: any ) {
        console.log(e.message)
        throw new Error("Problème avec la connexion au back")
        
    }
}