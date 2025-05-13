import {useEffect, useState} from "react";
import {getMessagesOfChatroom} from "../services/chatroomService.ts";
import {Message} from "../models/Message.ts"

function Chat() {
    
    const id = location.pathname.split("/")[2];
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        if (!id) return;
        const fetchChatroomMessages = async () => {
            const messagesOfChatroom = await getMessagesOfChatroom(id)
            // @ts-ignore
            setMessages(messagesOfChatroom)
            console.log(messagesOfChatroom)
        }
        fetchChatroomMessages()
    }, [id]);

    if (!id) return <p>Pas de chatroom sélectionnée.</p>;
    
    return (
        <>
            {messages.length > 0 ? (
            messages.map((message: Message) => (
            <>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                        </div>
                    </div>
                    <div className="chat-header">
                        {message.idUser.pseudo}
                        Obi-Wan Kenobi = récupérer les firstname des users
                        <time className="text-xs opacity-50">12:45 = heure de l'envoie</time>
                    </div>
                    <div className="chat-bubble"> {message.message} You were the Chosen One! = message</div>
                    <div className="chat-footer opacity-50">Delivered = checker avec les sockets comment ca marche
                    </div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                        </div>
                    </div>
                    <div className="chat-header">
                        Anakin
                        <time className="text-xs opacity-50">12:46</time>
                    </div>
                    <div className="chat-bubble">I hate you!</div>
                    <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>
            </>
            ))): "Pas de messages pour le moment"
            }
        </>
    )
}

export default Chat