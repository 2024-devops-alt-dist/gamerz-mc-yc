import {Message} from "../schema/Message";

export async function seedMessages() {
    await Message.create(
        {
            message: "Ce salon est vraiment génial, merci pour tous les tips !!",
            timestamp: Date.now(),
            idUser: '67d031702d2fc5f193185e67',
            idChatroom: "67d03cdd0b387d47c4509a66"
        },
        {
            message: "Salon vraiment pas dingue, personne ne communique. Je n'en vois pas l'intérêt :(",
            timestamp: Date.now(),
            idUser: '67d031702d2fc5f193185e67',
            idChatroom: '67d03cdd0b387d47c4509a66'
        }
    );
    
    console.log("Message créé");
    const allMessages = await Message.find({});
    const oneMessage = await Message.findOne({});
    console.log("Tous les messages:" + allMessages, "Message 1:" + oneMessage)
}
