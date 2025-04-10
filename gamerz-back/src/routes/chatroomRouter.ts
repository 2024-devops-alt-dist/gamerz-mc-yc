import {Router} from "express";
import {chatroomController} from "../controller/chatroomController";
import { checkToken, isAdmin } from "../middlewares/autorization";

export const chatRoomRouter = Router()

// @ts-ignore
chatRoomRouter.post('/new-chatroom', checkToken, isAdmin, chatroomController.create)