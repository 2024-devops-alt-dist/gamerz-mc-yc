import {Router} from "express";
import {registerController} from "./controller/registerController";
export const router = Router()

router.post('/register', registerController.createAccount)