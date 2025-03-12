// importe le module Express et le Router
import express, { Application } from "express";
import cors from "cors";
import {router} from "./router";
import {connexion} from "./config/db";

// const express = require('express');
const app:Application = express();

// connexion à l'api
async function connexionApi(): Promise<void> {
    await connexion
}
connexionApi()

// pour recevoir des données en json
app.use(express.json());
app.use(cors());
app.use(router)
app.get('/', (req, res) => {
    // envoie une réponse 'Hello World!' au client
    res.send("Bienvenue sur l'API Gamerz!");
  })

export default app;

