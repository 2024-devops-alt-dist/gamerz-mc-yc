import axios from "axios";
import { redirect } from "react-router-dom";
import { User } from "../models/UserModel";

const API = "http://localhost:3000";


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
        redirect("/login")
    } catch (err) {
        console.error(err)
        throw new Error("Erreur lors de l'inscription")
    }
}
