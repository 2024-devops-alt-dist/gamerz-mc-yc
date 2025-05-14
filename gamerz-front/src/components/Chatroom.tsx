import SideBar from "./SideBar.tsx";
import {useEffect, useState} from "react";
import {getAllChatrooms} from "../services/chatroomService.ts";
import {Outlet} from "react-router-dom";
import { useLogin } from "../context/useLogin.tsx";

function Chatroom() {
    const [chatrooms, setChatrooms] = useState([]);
    const { user } = useLogin()

    const fetchChatrooms = async () => {
        try {
            const data = await getAllChatrooms();
            setChatrooms(data);
            
        } catch (error) {
            console.error("Erreur lors de la récupération des chatrooms :", error);
        }
    };
    
    useEffect(() => {
        fetchChatrooms();
    }, []);
   
    return (
        <div className="w-full">
            <h3 className="!text-md font-medium text-center w-full p-5">Bienvenue <span className="text-secondary">{user.pseudo}</span> !</h3>
            <div className="flex border">
                <aside className="w-1/4 h-screen overflow-y-auto">
                    <SideBar chatrooms={chatrooms} fetchChatrooms={fetchChatrooms} />
                </aside>

                <aside className="w-3/4 p-5 h-screen overflow-y-auto">
                        <Outlet />
                </aside>
            </div>
        </div>
    )
}

export default Chatroom