import {Router} from "express";
import { messageController } from "../controller/messageController";

export const messageRouter = Router()

messageRouter.post('/chatrooms/:id/message', messageController.create)

// Centraliser ici les routes de la partie message (get messages, etc.)
// messageRouter.get('/messages/:id', messageController.getMessages)   