import {useForm} from "react-hook-form";
import {createChatroom} from "../services/chatroomService.ts";
import {useState} from "react";
import {toast, Toaster} from 'react-hot-toast';

function ChatroomModal() {

    const {register, handleSubmit, reset, formState: { errors}} = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const onSubmit = async (data: any) => {
        
        try {
           await createChatroom(data)
            setIsModalOpen(false)
            reset()
            toast.success('Et un salon de plus :)')
            
        } catch (e: any) {
            console.log(e.message)
            throw new Error("Impossible de récupérer les données du formulaire")
        }
    }
    // @ts-ignore
    return (
        <>
            <Toaster position="top-right" />
            <button onClick={() => setIsModalOpen(true)} className="btn">Nouveau salon</button>

            {isModalOpen && (
            <div className="modal modal-open" role="dialog">
                <div className="modal-box fieldset flex flex-col items-center w-lg bg-base-200 border border-base-300 p-8 rounded-box">
                    <h3 className="text-lg font-bold">Création d'un nouveau salon !</h3>
                    
                    <form className="" method="POST" onSubmit={handleSubmit(onSubmit)}>
                        
                        <label className="fieldset-label text-base text-left w-full my-3">Titre du salon</label>
                        <input {...register("title", {required: "ce champ est obligatoire"})} className="input w-md" placeholder="Pour les fans de Roblox" />
                        {errors.title && <div
                            className="text-error text-xs font-extralight italic mt-2"> {errors.title.message} </div>}
                        
                        <label className="fieldset-label text-base text-left w-full my-3">Description</label>
                        <textarea {...register("description", {required: "ce champ est obligatoire"})} className="input w-md h-20" placeholder="The place to be pour la communauté"/>
                        {errors.description && <div
                            className="text-error text-xs font-extralight italic mt-2"> {errors.description.message} </div>}
                        
                        <button className="btn btn-soft btn-primary text-base mt-6" type="submit">Création</button>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
                )}
        </>
    );
}

export default ChatroomModal