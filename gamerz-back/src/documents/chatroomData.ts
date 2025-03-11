import { Chatroom } from "../schema/Chatroom";

export async function seedChatroom() {
    await Chatroom.create(
        {
            title: "Stardew Valley",
            description: "Un salon chill pour les hardcore gamerz de Stardew Valley",
            members: [],
            idUser: "67d031702d2fc5f193185e67" // Ajoute le créateur ici
        },
        {
            title: "The Legend of Zelda",
            description: "AAaaaaaaAAAAAhhhhhhhhhhhhh",
            members: [],
            idUser: "67d031702d2fc5f193185e67" 
        },
        {
            title: "Minecraft",
            description: "Huh?",
            members: [],
            idUser: "67d031702d2fc5f193185e67"
        },
    );
    console.log("Salons créé!")
    console.log(await Chatroom.findOne({ title: "Stardew Valley"}).exec())
    
}