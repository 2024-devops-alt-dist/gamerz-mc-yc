import { Request, Response, NextFunction } from 'express';
import {User} from "../schema/Users";

export function registerCheck(req: Request, res: Response, next: NextFunction) {
    const {email} = req.body
    const userWithoutAccount = async () => {
        try { 
            const user = await User.findOne({
            email
        })
            if (!user) {
                return next();
            }}
       catch (e: any) {
           console.log(e.message)
       }
        //if user 
        throw new Error("Utilisateur ayant déjà un compte")
    }
    
    userWithoutAccount()
}
    