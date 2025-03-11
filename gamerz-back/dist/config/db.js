"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connexion = void 0;
const mongoose = require("mongoose");
const uri = "mongodb+srv://Gamerz:Password123!@gamerz.jmu4f.mongodb.net/?retryWrites=true&w=majority&appName=Gamerz";
// Connexion à MongoDB Atlas
exports.connexion = mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connexion à MongoDB Atlas réussie !"))
    .catch((err) => console.error("Erreur de connexion à MongoDB :", err));
