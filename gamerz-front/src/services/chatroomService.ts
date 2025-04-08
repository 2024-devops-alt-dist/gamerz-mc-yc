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