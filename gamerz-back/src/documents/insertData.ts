import { connexion } from "../config/db";
import { seedUsers } from "./usersData";
import { seedChatroom } from "./chatroomData";
import { seedCandidacy } from "./candidacyData";

export async function insertData() {
    await connexion
    await seedUsers()
    await seedChatroom()
    await seedCandidacy()
}

