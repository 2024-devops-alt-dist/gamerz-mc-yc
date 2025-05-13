import { useEffect, useState } from "react";
import { getMessagesOfChatroom } from "../services/chatroomService.ts";
import { useParams } from "react-router-dom";
import { socket } from "../socket.ts";
import { Message } from "../models/MessageModel.ts";
import { createMessage } from "../services/messageService.ts";

function Chat() {

    // Pour afficher les messages reçus
    const [messageList, setMessageList] = useState<Message[]>([])

    // Récupère l'id de la chatroom
    // const { id } = useParams()

    // Récupère une liste de messages dans Chatroom
    
    const id = location.pathname.split("/")[2];
   
    useEffect(() => {
        if (!id) return;
        const fetchChatroomMessages = async () => {
            const messagesOfChatroom = await getMessagesOfChatroom(id)
            // @ts-ignore
            setMessageList(messagesOfChatroom)
            console.log(messagesOfChatroom)
        }
        fetchChatroomMessages()
    }, [id]);

    // Pour afficher le message envoyé dans le chat
    const [message, setMessage] = useState("")

    // socket.emit(messages)

    function handleSend(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (message.trim() === "") return
        console.log("sending message", message, id)
        socket.emit("message", { message, chatroomId: id })
        setMessageList((prevMessages) => [...prevMessages, { content: message, chatroomId: id, senderId: '67d42696d30139f755624a66' } as unknown as Message])
        
        if (!id) {
            console.error("Chatroom ID is not defined");
            return;
        }

        createMessage({ message, senderId: '67d42696d30139f755624a66' , chatroomId: id })
        setMessage("")
    }


    if (!id) return <p>Pas de chatroom sélectionnée.</p>;
    
    return (
        <>
            {messageList && messageList ? (
                messageList.map((message: Message) => (
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

            {/* Partie : Envoyer un message */}

            <div className="max-w-full mx-auto my-auto">

                <form onSubmit={handleSend}>
                    <label className="sr-only">Your message</label>
                    <div className="flex items-center py-2 px-3 rounded-lg bg-base-300">
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} id="chat" className="block mx-4 p-2.5 w-[80%] text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-base-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                        <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-primary">
                            <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Chat