import {Router} from "express";
import { userController } from "../controller/userController";
export const userRouter = Router()

userRouter.get('/users', userController.getAllUsers)
userRouter.get('/candidacies', userController.getCandidacies)
userRouter.put('/users/:id/status', userController.updateUserStatus)