import {use, useEffect, useState} from "react";
import {addMemberInChatroom, getAllChatrooms} from "../services/chatroomService.ts";
import {Link, Outlet} from "react-router-dom";

function Chatroom() {
    const [chatrooms, setChatrooms] = useState([]);
    const [newMember, setNewMember] = useState([]);
    
    const addMember = async (idChatroom: any, idMember: any) => {
        try {
            const newMember = await addMemberInChatroom(idChatroom, idMember)
            console.log(newMember)
            setNewMember(newMember)
            
        } catch (e: any) {
            console.log(e.message)
        }
    }
    // @ts-ignore
    useEffect(() => {
        const fetchChatrooms = async () => {
            try {
                const data = await getAllChatrooms();
                setChatrooms(data);
                console.log(data);
                
            } catch (error) {
                console.error("Erreur lors de la récupération des chatrooms :", error);
            }
        };

        fetchChatrooms();
    }, []); 
    
    // @ts-ignore
    // @ts-ignore
    return (
        <div className="w-full">
            <div className="flex border bg-red">
                <aside className="w-1/4 h-screen overflow-y-auto">
                    <ul className="list bg-base-300 shadow-md">
                        {chatrooms.map((chatroom) => {
                          
                            return (
                                <li
                                    key={chatroom._id}
                                    className="px-4 py-6 border-b border-r transition duration-300"
                                >
                                    <div className="flex justify-between w-full items-center">
                                        <p className="text-left text-secondary text-lg uppercase font-bold">
                                            {chatroom.title}
                                        </p>
                                        <p className="text-right">
                                            Participants : {chatroom.members.length}
                                        </p>
                                    </div>

                                    <p className="list-col-wrap text-xs text-left mt-4">
                                        {chatroom.description}
                                    </p>

                                    <div className="flex justify-end mt-7">
                                        <Link
                                            to={`/chatrooms/${chatroom._id}`}
                                            className="btn px-3 py-1 text-sm font-bold text-purple-400 border border-purple-600 bg-zinc-900 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_12px_#a855f7] transition duration-300"
                                        onClick={() => addMember(chatroom._id, chatroom.idUser)}>
                                            Rejoindre
                                        </Link>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </aside>

                <aside className="w-3/4 p-5 h-screen overflow-y-auto">
                    <p>Le logger sur le dernier</p>
                    <Outlet/>
                </aside>
            </div>
        </div>
    )
}

export default Chatroom