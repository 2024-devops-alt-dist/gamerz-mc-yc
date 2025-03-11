import {User} from "../schema/Users"
import bcrypt from "bcrypt";

const saltRounds = 10;
export const registerController = {
    
    createAccount: async (req: Request, res: Response): Promise<void> => {
        try{
            // @ts-ignore
            const { pseudo, email, passwordUser } = req.body;
            
            const hashPassword = async (password: string) => {
                try {
                    const hash = await bcrypt.hash(password, saltRounds);
                    console.log("Mot de passe haché :", hash);
                    return hash; 
                } catch (err) {
                    console.error("Erreur lors du hachage :", err);
                }
            };
            
            const newUser = await User.create({
                pseudo,
                email,
                password: await hashPassword(passwordUser),
                isAccepted: false,
                openToPlay: false
            });
            console.log(newUser)
            res.status(200).send("New user:", newUser)
            
        } catch (e) {
            console.log(e.message)
            res.status(500).send(e.message)
        }
    }
}