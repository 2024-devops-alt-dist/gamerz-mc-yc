import {User} from "../schema/Users"
import bcrypt from "bcrypt"
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { strict } from "assert";

dotenv.config();

const saltRounds = 10;
const secretKey = process.env.JWT_SECRET;

export const authController = {
    
    // Fonction s'enregistrer
    register: async (req: Request, res: Response): Promise<void> => {
       
        try{
            // Récupération des données de l'utilisateur depuis le formulaire d'inscription
            const { pseudo, email, password, motivation, isAdmin } = req.body;
            
            // Si les champs ne sont pas remplis, on renvoie un message d'erreur
            if( !pseudo || !email || !password || !motivation) {

                res.status(400).send("Tous les champs doivent être rempli")
            }
            
            // On hashe le mot de passe avant de l'enregistrer
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // On crée un nouvel utilisateur dans la base de données
            const newUser = await User.create({
                pseudo,
                email,
                password: hashedPassword,
                isAdmin,
                motivation,
                isAccepted: false,
                openToPlay: false,
            });

            // On renvoie un message quand tout s'est bien passé
            res.status(200).json({message: "New user:", newUser: newUser})
                      
        } catch (e: any) {
            console.log(e.message)

            res.status(500).send(e.message)
        }
    },

    // Fonction se connecter
    login: async (req: Request, res: Response): Promise<void> => {

        try{
            // Récupération des données de l'utilisateur depuis le formulaire de connexion
            const { email, password } = req.body;
            
            // Si les champs email et password ne sont pas remplis, on renvoie un message d'erreur
            if (!email || !password) {
                res.status(400).send("Tous les champs doivent être rempli")
            }

            // On cherche l'utilisateur dans la base de données à partir de son email
            const user = await User.findOne({ email });

            // Si l'utilisateur n'est pas trouvé, on renvoie un message d'erreur (+ on assure que l'utilisateur a bien un mot de passe)
            if (!user || !user.password) {
                res.status(400).send("Email ou mot de passe incorrect");
                return;
            }

            // Comparaison mot de passe enregistré et mot de passe saisi
            const passwordMatch = await bcrypt.compare(password, user.password);

            // Si le mot de passe ne correspond pas, on renvoie un message d'erreur
            if (!passwordMatch) {
                res.status(400).send("Email ou mot de passe incorrect")
            }

            const userInfo = {
                id : user.id,
                pseudo : user.pseudo,
                isAccepted : user.isAccepted,
                isAdmin : user.isAdmin
            }

            if (!secretKey) {
                throw new Error("Secret key non trouvée")
            }
            // On génère un token JWT en utilisant JWT.sign
            const token = jwt.sign(userInfo, secretKey, { expiresIn: "1h" }); 

            // On stocke le token dans les cookies du navigateur avec des options 
            res.cookie("token", token, {
                httpOnly: true,
                maxAge: 24*60*60*1000,
                secure: false,
                sameSite: "none"
            })

            // Si tout est bon, on renvoie un message de bienvenue
            res.status(200).json({ message: "Bienvenue", user: userInfo });

        } catch (error: any) {
            console.log(error.message);
            res.status(500).send(error.message);
        }
    }
}
