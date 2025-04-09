import {Router} from "express";
import {chatroomController} from "../controller/chatroomController";

export const chatRoomRouter = Router()

// @ts-ignore
chatRoomRouter.post('/new-chatroom', chatroomController.create)
// @ts-ignore
chatRoomRouter.get('/chatrooms', chatroomController.read)
// @ts-ignore
chatRoomRouter.get('/chatrooms/:id', chatroomController.getById)