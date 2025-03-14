import { connexion } from "../config/db";
import { seedUsers } from "./usersData";
import {seedMessages} from "./messagesData";
import { seedChatroom } from "./chatroomData";

export async function insertData() {
    await connexion
    await seedUsers()
    await seedChatroom()
    await seedMessages()
}

