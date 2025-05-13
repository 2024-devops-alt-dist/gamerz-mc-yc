import SideBar from "./SideBar.tsx";
import {useEffect, useState} from "react";
import {getAllChatrooms} from "../services/chatroomService.ts";
import {Outlet} from "react-router-dom";

function Chatroom() {
    const [chatrooms, setChatrooms] = useState([]);
    // const {idChatroom} = useParams()
    // console.log(idChatroom)
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
            <div className="flex border bg-red">
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