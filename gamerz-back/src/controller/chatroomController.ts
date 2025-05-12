import {Chatroom} from "../schema/Chatroom";
import { Request, Response } from 'express';
import {Message} from "../schema/Message";
import mongoose from "mongoose";

interface ChatroomParams {
    id: any;
}
export const chatroomController  = {
    
    create : async (req: Request, res: Response): Promise<void> => {
        
        try {
            // @ts-ignore
            const {title, description } = req.body;
            const members = []
            
            if(!title || !description) {
                // @ts-ignore
                res.status(400).send("Tous les champs doivent être remplis")
            }
            const newChatroom = await Chatroom.create({
                title,
                description,
                members : [],
                //id de l'admin
                idUser: '67d42696d30139f755624a66'
            });
            
            // @ts-ignore
            res.status(200).json({message: "New Chatroom", newChatroom: newChatroom})
        } catch (e: any) {
            console.log(e.message)
            
            // @ts-ignore
            res.status(500).send(e.message)
        }
    },
    
    read : async (req: Request, res: Response): Promise<void> => {
        try {
            const chatrooms = await Chatroom.find({})
            console.log(chatrooms)
            // @ts-ignore
            res.status(200).json({message: "Chatrooms", chatrooms: chatrooms})
            
        } catch (e: any) {
            console.log(e.message)
            throw new Error("Appel à l'API à échoué")
        }
    },
    
  getMessages: async(req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params
            const messages = await Message.find({
                idChatroom: id
            }).populate('idUser');
            res.status(200).json({messages})
        } catch(e: any) {
            console.log(e.message)
            throw new Error("Impossible de récupérer les messages avec l'API")
        }
  }, 
    
    addMember: async(req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params
            const idMember = new mongoose.Types.ObjectId(req.body.id);
            console.log(idMember)

            if (!mongoose.Types.ObjectId.isValid(idMember)) {
                res.status(400).send({ error: 'Invalid member ID' });
                return;
            }
            
            const chatroom = await Chatroom.findById(id)

            //some s'arrête dès qu'il trouve le match et renvoie un bool 
            const isUserInChatroom: boolean | undefined = chatroom?.members.some(member => member.toString() === idMember.toString());

            if (isUserInChatroom) {
                res.status(400).send({ error: 'User already in chatroom' });
                return;
            }
            
            chatroom?.members.push(idMember);
            await chatroom?.save();
            
            res.status(200).send({chatroom})
        } catch (e: any) {
            console.log(e.message)
        }
    }
}