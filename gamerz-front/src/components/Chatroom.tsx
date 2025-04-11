import Chat from "./Chat.tsx";
import SideBar from "./SideBar.tsx";
import {useEffect, useState} from "react";
import {getAllChatrooms} from "../services/chatroomService.ts";

function Chatroom() {
    const [chatrooms, setChatrooms] = useState([]);
    const fetchChatrooms = async () => {
        try {
            const data = await getAllChatrooms();
            setChatrooms(data);
            console.log(data);

        } catch (error) {
            console.error("Erreur lors de la récupération des chatrooms :", error);
        }
    };

    useEffect(() => {
        fetchChatrooms();
    }, []);
    // @ts-ignore
    return (
        <div className="w-full">
            <div className="flex border bg-red">
                <aside className="w-1/4 h-screen overflow-y-auto">
                    <SideBar chatrooms={chatrooms} fetchChatrooms={fetchChatrooms} />
                </aside>

                <aside className="w-3/4 p-5 h-screen overflow-y-auto">
                    <p>Le logger sur le dernier</p>
                    <Chat />
                </aside>
            </div>
        </div>
    )
}

export default Chatroom