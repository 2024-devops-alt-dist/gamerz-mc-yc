// importe le module Express et le Router
import express, { Application } from "express";
import cors from "cors";
import {authRouter} from "./routes/auth";
import {connexion} from "./config/db";
import { userRouter } from "./routes/user";
import {chatRoomRouter} from "./routes/chatroomRouter";
import cookieParser from "cookie-parser";

// const express = require('express');
const app:Application = express();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// connexion à l'api
async function connexionApi(): Promise<void> {
    await connexion
}
connexionApi()


app.use(cors({
    credentials: true, 
    origin: 'http://localhost:5175'
}));

app.use(
    authRouter, 
    chatRoomRouter,
    userRouter)
app.get('/', (req, res) => {
    // envoie une réponse 'Hello World!' au client
    res.send("Bienvenue sur l'API Gamerz!");
  })

export default app;

