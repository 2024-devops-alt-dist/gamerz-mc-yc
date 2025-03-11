"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// on utilisera le port 3000 pour accéder au serveur
const port = 3000;
// démarrage du serveur sur le port défini
app_1.default.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
