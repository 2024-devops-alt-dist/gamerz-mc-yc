// importe le module Express et le Router
import express, { Application } from "express";
import cors from "cors";
import {authRouter} from "./routes/auth";
import {connexion} from "./config/db";
import { userRouter } from "./routes/user";
import {chatRoomRouter} from "./routes/chatroomRouter";
import cookieParser from "cookie-parser";

const app:Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Connexion à l'api
async function connexionApi(): Promise<void> {
    await connexion
}
connexionApi()

// Config Cors prenant en compte les credentials
app.use(cors({
    credentials: true, 
    origin: 'http://localhost:5175'
}));

app.use(
    authRouter, 
    chatRoomRouter,
    userRouter)

app.get('/', (req, res) => {
    res.send("Bienvenue sur l'API Gamerz!");
  })

export default app;

