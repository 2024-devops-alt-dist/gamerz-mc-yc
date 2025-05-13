import {Router} from "express";
import { userController } from "../controller/userController";
import { checkToken, isAdmin } from "../middlewares/autorization";
export const userRouter = Router()

// userRouter.get('/users', userController.getAllUsers)
userRouter.get('/candidacies', checkToken, isAdmin, userController.getCandidacies)
userRouter.put('/users/:id/status', checkToken, isAdmin, userController.updateUserStatus)