import { Request, Response, NextFunction } from 'express';
import {User} from "../schema/Users";

export function registerCheck(req: Request, res: Response, next: NextFunction) {
    const {email} = req.body
    const userWithoutAccount = async () => {
        const user = await User.findOne({
            email
        })
        if (!user) {
            return next();
        }
        //if user 
        throw new Error("Utilisateur ayant déjà un compte")
    }
    userWithoutAccount()
}
    