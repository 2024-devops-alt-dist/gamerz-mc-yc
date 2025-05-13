import {Router} from "express";
import {authController} from "../controller/authController";
import {registerCheck} from "../middlewares/authentification";
export const authRouter = Router()


authRouter.post('/register', registerCheck, authController.register)
authRouter.post('/login', authController.login)