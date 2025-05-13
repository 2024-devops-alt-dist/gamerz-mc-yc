// importe le module Express et le Router
import express, { Application } from "express";
import { authRouter } from "./routes/authRouter";
import { connexion } from "./config/db";
import { userRouter } from "./routes/userRouter";
import { chatRoomRouter } from "./routes/chatroomRouter";
import cookieParser from "cookie-parser";
import { messageRouter } from "./routes/messageRouter";
import cors from "cors";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Connexion à l'api
async function connexionApi(): Promise<void> {
  await connexion;
}

// CORS pour les requêtes HTTP classiques
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5175"
  })
);

connexionApi();

app.use(authRouter, chatRoomRouter, userRouter, messageRouter);

app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API Gamerz!");
});

export default app;
