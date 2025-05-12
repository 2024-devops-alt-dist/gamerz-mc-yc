import {NavLink, useLocation} from "react-router-dom";
import {addMemberInChatroom} from "../services/chatroomService.ts";
import {useState} from "react";
import {Chatroom} from "../models/Chatroom.ts";

interface SideBarProps {
    chatrooms?: Chatroom[]
    fetchChatrooms: Function
}

function SideBar({chatrooms, fetchChatrooms}: SideBarProps) {
    const [newMember, setNewMember] = useState([]);
    const location = useLocation()
  
    const pathname = location.pathname;
    const id = pathname.split("/")[2];
    console.log(id)
    const addMember = async (idChatroom: any, idMember: any) => {
        try {
            const newMember = await addMemberInChatroom(idChatroom, idMember)
            setNewMember(newMember)
            fetchChatrooms()

        } catch (e: any) {
            console.log(e.message)
        }
    }
    
    return (
        <>
            <ul className="list bg-base-300 shadow-md">
                {chatrooms?.map((chatroom: Chatroom) => {

                    return (
                        <li
                            key={chatroom._id}
                            className={`px-4 py-6 border-b border-r transition duration-300 rounded-md ${
                                id === chatroom._id ?
                                    "bg-purple-800/40 border-purple-500 text-purple-200 shadow-[0_0_10px_#7e22ce]"
                                    : "hover:bg-zinc-800"
                            }`}
                        >
                            <div className="flex justify-between w-full items-center">
                                <p className="text-left text-secondary text-lg uppercase font-bold">
                                    {chatroom.title}
                                </p>
                                <p className="text-right">
                                    {chatroom.members.length === 0 ? "Participant : 0" : "Participants : " + chatroom.members.length}
                                </p>
                            </div>

                            <p className="list-col-wrap text-xs text-left mt-4">
                                {chatroom.description}
                            </p>

                            <div className="flex justify-end mt-7">
                                <NavLink
                                    to={`/chatrooms/${chatroom._id}`}
                                    className="btn px-3 py-1 text-sm font-bold text-purple-400 border border-purple-600 bg-zinc-900 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_12px_#a855f7] transition duration-300"
                                    onClick={() => addMember(chatroom._id, chatroom.idUser)}>
                                    Rejoindre 
                                    {/*if(user.id === chatroom.members.some(userId) => userId === user.id) pas de bouton*/}
                                </NavLink>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default SideBar