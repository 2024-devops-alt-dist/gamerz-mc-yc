import {Router} from "express";
import {chatroomController} from "../controller/chatroomController";

export const chatRoomRouter = Router()

// @ts-ignore
chatRoomRouter.post('/new-chatroom', chatroomController.create)