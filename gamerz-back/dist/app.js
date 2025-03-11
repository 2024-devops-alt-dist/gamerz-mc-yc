"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importe le module Express et le Router
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// const express = require('express');
const app = (0, express_1.default)();
// pour recevoir des données en json
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    // envoie une réponse 'Hello World!' au client
    res.send("Bienvenue sur l'API Gamerz!");
});
exports.default = app;
