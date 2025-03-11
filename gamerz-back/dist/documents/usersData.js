"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedUsers = seedUsers;
const Users_1 = require("../schema/Users");
async function seedUsers() {
    await Users_1.User.create({
        pseudo: "Yaël",
        email: "yaya@mail.fr",
        password: "password",
        isAccepted: false,
        openToPlay: false,
    }, {
        pseudo: "Maëva",
        email: "maev@mail.fr",
        password: "password",
        isAccepted: false,
        openToPlay: false,
    });
    console.log("Utilisateurs ajoutés !");
    const userFound = await Users_1.User.findOne({ pseudo: "Yaël" }).exec();
    console.log("utilisateur trouvé:", userFound);
}
// seedUsers().catch(console.error);
