"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const usersData_1 = require("./usersData");
async function insertData() {
    await db_1.connexion;
    await (0, usersData_1.seedUsers)();
}
insertData().catch(console.error);
