import {Router} from "express";
import {chatroomController} from "../controller/chatroomController";
import { checkToken, isAdmin } from "../middlewares/autorization";

export const chatRoomRouter = Router()

// @ts-ignore
chatRoomRouter.post('/new-chatroom', checkToken, isAdmin, chatroomController.create)
// @ts-ignore
chatRoomRouter.get('/chatrooms', chatroomController.read)
// @ts-ignore
chatRoomRouter.get('/chatrooms/:id', chatroomController.getMessages)
chatRoomRouter.patch('/chatrooms/:id', chatroomController.addMember)