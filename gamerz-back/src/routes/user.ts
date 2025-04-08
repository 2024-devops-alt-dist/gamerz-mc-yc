import {Router} from "express";
import { userController } from "../controller/userController";
export const userRouter = Router()

userRouter.get('/candidacies', userController.getCandidacies)