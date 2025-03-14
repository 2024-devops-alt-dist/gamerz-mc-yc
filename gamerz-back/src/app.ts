// importe le module Express et le Router
import express, { Application } from "express";
import cors from "cors";
import {router} from "./routes/auth";
import {connexion} from "./config/db";
import bodyParser from "body-parser";

// const express = require('express');
const app:Application = express();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connexion à l'api
async function connexionApi(): Promise<void> {
    await connexion
}
connexionApi()

app.use(cors());
app.use(router)
app.get('/', (req, res) => {
    // envoie une réponse 'Hello World!' au client
    res.send("Bienvenue sur l'API Gamerz!");
  })

export default app;

