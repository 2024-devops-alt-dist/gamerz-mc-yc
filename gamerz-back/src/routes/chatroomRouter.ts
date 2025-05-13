import {Router} from "express";
import {chatroomController} from "../controller/chatroomController";
import { checkToken, isAdmin } from "../middlewares/autorization";

export const chatRoomRouter = Router()

// @ts-ignore
chatRoomRouter.post('/new-chatroom', checkToken, isAdmin, chatroomController.create)

// @ts-ignore
chatRoomRouter.get('/chatrooms', checkToken, chatroomController.read)
// @ts-ignore
chatRoomRouter.get('/chatrooms/:id', checkToken, chatroomController.getMessages)
chatRoomRouter.patch('/chatrooms/:id', checkToken, chatroomController.addMember)