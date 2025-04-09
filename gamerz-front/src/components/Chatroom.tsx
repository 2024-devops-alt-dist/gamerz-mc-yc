import {useEffect, useState} from "react";
import {getAllChatrooms} from "../services/chatroomService.ts";
import Chat from "./Chat.tsx";

function Chatroom() {
    const [chatrooms, setChatrooms] = useState([]);
    
    const joinChatroom = () => {
        
    }

    // @ts-ignore
    useEffect(() => {
        const fetchChatrooms = async () => {
            try {
                const data = await getAllChatrooms();
                setChatrooms(data);
                console.log(data); // Optionnel
            } catch (error) {
                console.error("Erreur lors de la récupération des chatrooms :", error);
            }
        };

        fetchChatrooms();
    }, []);
    // @ts-ignore
    return(
        <div className="w-full">
                
            <div className="flex border">
            <aside className="w-1/4 h-screen overflow-y-auto">

                <ul className="list bg-base-300 shadow-md">

                    {chatrooms.map((chatroom) => (
                            <>
                                <li className="px-4 py-6 border-b border-r" key={chatroom.id}>

                                    <div className="flex justify-between w-full items-center">
                                        <p className="text-left text-secondary text-lg uppercase font-bold">{chatroom.title}</p>
                                        <p className="text-right">Participants : {chatroom.members.length}</p>
                                    </div>

                                    <p className="list-col-wrap text-xs text-left mt-4">
                                        {chatroom.description}
                                    </p>
                                    <div className="flex justify-end mt-7">
                                        <button
                                            className="btn px-3 py-1 text-sm font-bold text-purple-400 border border-purple-600 bg-zinc-900 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_12px_#a855f7] transition duration-300"
                                            onClick={joinChatroom}>Rejoindre
                                        </button>
                                    </div>
                                </li>
                            </>
                        )
                    )}
                </ul>
            </aside>

                <aside className="w-3/4 p-5 h-screen overflow-y-auto">
                    {/*<p>*/}
                    {/*    if(!pas de salon)*/}
                    {/*    Vous devez faire parti du salon pour voir la conversation*/}
                    {/*    sinon le loggez sur le dernier*/}
                    {/*</p>*/}

                   <Chat />
                </aside>
            </div>
        </div>
    )
}

export default Chatroom