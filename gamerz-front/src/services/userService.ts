import axios from "axios";
import { User } from "../models/UserModel";

const API = import.meta.env.VITE_API_URL;


export async function userRegister(data : User) {
    try {
        const user = {
            email : data.email,
            pseudo : data.pseudo,
            password: data.password,
            motivation: data.motivation
        }
    
        console.log("hello")
        await axios.post(`${API}/register`,
            user
        )
        console.log(user)
    } catch (err) {
        console.error(err)
        throw new Error("Erreur lors de l'inscription")
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(data: any) {
    try {
        const {email, password } = data
        console.log(email, password )
       const response =  await axios.post(`${API}/login`, {email, password}, { withCredentials: true })
        return response.data
        
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (error: any) {
        console.log(error.message)
        throw new Error("Erreur axios lors de la connexion")
}
}
