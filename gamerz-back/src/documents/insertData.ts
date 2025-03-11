import { connexion } from "../config/db";
import { seedUsers } from "./usersData";

export async function insertData() {
    await connexion
    await seedUsers()
}

