// importe le module Express et le Router
import express, { Application } from "express";
import cors from "cors";
import { insertData } from "./documents/insertData";

// const express = require('express');
const app:Application = express();

// pour recevoir des données en json
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    // envoie une réponse 'Hello World!' au client
    res.send("Bienvenue sur l'API Gamerz!");
  })

insertData().catch(console.error)

export default app;

