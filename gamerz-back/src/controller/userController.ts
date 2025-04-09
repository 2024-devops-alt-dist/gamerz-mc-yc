import { User } from "../schema/Users";
import { Request, Response } from "express";

export const userController = {

  getAllUsers: async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await User.find();
      res.status(200).json(data);
    } catch (error: any) {
      console.log(error.message);
      res.status(500).send(error.message);
    }
  },

  // Récupérer les candidatures reçues
  getCandidacies: async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await User.find({}, { password: 0, updatedAt: 0, __v: 0 });
      res.status(200).json(data);
    } catch (error: any) {
      console.log(error.message);
      res.status(500).send(error.message);
    }
  },

  // Modifier le statut de l'utilisateur
  updateUserStatus: async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.params.id;
      const { isAccepted, status } = req.body;

      // Vérifie que le statut est fourni
      if (!status && !isAccepted) {
        res.status(400).send("Le statut est requis.");
      }

      const result = await User.updateOne(
        { _id: userId }, // Filtre par id
        { $set: { isAccepted, status } } // Les champs modifiés
      );

      // Vérifie si un utilisateur a été modifié
      if (result.modifiedCount === 0) {
        res.status(404).send("Utilisateur non trouvé.");
      }

      res.status(200).send("Statut mis à jour avec succès.");

    } catch (error: any) {
      console.log(error.message);
      res.status(500).send(error.message);
    }
  },
};
