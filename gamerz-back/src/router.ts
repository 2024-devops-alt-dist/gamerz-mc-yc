import {Router} from "express";
import {authController} from "./controller/authController";
import {registerCheck} from "./middlewares/authentification";
export const router = Router()

// @ts-ignore
router.post('/register', registerCheck, authController.register)