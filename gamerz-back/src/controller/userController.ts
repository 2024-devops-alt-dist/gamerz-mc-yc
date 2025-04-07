import { User } from "../schema/Users";
import { Request, Response } from "express";

export const userController = {
  // Récupérer les candidatures reçues
  getCandidacies: async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await User.find({}, { password: 0, updatedAt: 0, __v: 0 });
      res.status(200).json(data)
    } catch (error: any) {
      console.log(error.message);
      res.status(500).send(error.message);
    }
  },
};
