import {User} from "../schema/Users"
import bcrypt from "bcrypt"
import {connexion} from "../config/db";

const saltRounds = 10;
export const authController = {
    
    register: async (req: Request, res: Response): Promise<void> => {
       
        try{
            // @ts-ignore
            const { pseudo, email, password, motivation } = req.body;
            
                    const hashedPassword = await bcrypt.hash(password, saltRounds);

                    const newUser = await User.create({
                        pseudo,
                        email,
                        password: hashedPassword,
                        motivation,
                        isAccepted: false,
                        openToPlay: false,
                    });
                    // @ts-ignore
                    res.status(200).json({message: "New user:", newUser: newUser})
                      
        } catch (e: any) {
            console.log(e.message)
            // @ts-ignore
            res.status(500).send(e.message)
        }
    }
}