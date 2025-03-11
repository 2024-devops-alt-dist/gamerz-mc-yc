import { connexion } from "../config/db";
import { seedUsers } from "./usersData";
import { seedChatroom } from "./chatroomData";

export async function insertData() {
    await connexion
    await seedUsers()
    await seedChatroom()
}

