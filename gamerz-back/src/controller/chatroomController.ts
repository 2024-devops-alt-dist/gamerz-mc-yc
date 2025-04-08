import {Chatroom} from "../schema/Chatroom";

export const chatroomController  = {
    
    create : async (req: Request, res: Response): Promise<void> => {
        
        try {
            // @ts-ignore
            const {title, description } = req.body;
            const members = []
            
            if(!title || !description) {
                // @ts-ignore
                res.status(400).send("Tous les champs doivent être remplis")
            }
            const newChatroom = await Chatroom.create({
                title,
                description,
                members : [],
                //id de l'admin
                idUser: '67d42696d30139f755624a66'
            });
            
            // @ts-ignore
            res.status(200).json({message: "New Chatroom", newChatroom: newChatroom})
        } catch (e: any) {
            console.log("coucou")
            console.log(e.message)
            
            // @ts-ignore
            res.status(500).send(e.message)
        }
    }
}