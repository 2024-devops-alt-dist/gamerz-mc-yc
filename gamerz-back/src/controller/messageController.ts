import { Chatroom } from "../schema/Chatroom";
import { Request, Response } from "express";
import { Message } from "../schema/Message";
import mongoose from "mongoose";

export const messageController = {
  create: async (req: Request, res: Response): Promise<void> => {
    try {
      const { message, chatroomId, senderId } = req.body;
      if (!chatroomId || !message) {
        res.status(400).send("Tous les champs doivent être remplis");
      }
      const newMessage = await Message.create({
        message,
        idUser: senderId,
        idChatroom: chatroomId
      });
      res.status(200).json({
        message: "New message",
        newMessage: newMessage,
        });
    } catch (e: any) {
      console.log(e.message);
      res.status(500).send(e.message);
    }
  },

  // Regrouper toutes les fcts de la partie message ici

  //   getMessages: async(req: Request, res: Response): Promise<void> => {
  //         try {
  //             const { id } = req.params
  //             const messages = await Message.find({
  //                 idChatroom: id
  //             }).populate('idUser');
  //             res.status(200).json({messages})
  //         } catch(e: any) {
  //             console.log(e.message)
  //             throw new Error("Impossible de récupérer les messages avec l'API")
  //         }
  //   },
};
