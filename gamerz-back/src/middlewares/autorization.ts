import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { CustomJwtPayload } from "../types/CustomJwtPayload";

// Extend the Request interface to include the 'user' property
declare global {
    namespace Express {
        interface Request {
            user: CustomJwtPayload;
        }
    }
}

dotenv.config();

const secretKey = process.env.JWT_SECRET;

export function checkToken(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.token
    console.log("token", token)
    if (!token) {
        res.status(401).send("Please, log in");
        return
    }  
    
    if (!secretKey) throw new Error("Secret key non trouvée");

    try {
        const decoded = jwt.verify(token, secretKey)
        req.user = decoded as CustomJwtPayload;
        next()
    } catch (error) {
        res.status(403).json({ error: 'Invalid token' });
        return
    }
}

export function isAdmin(req: Request, res: Response, next: NextFunction) {
    try {
        if (!req.user || !req.user.isAdmin) {
            res.status(403).json({ error: 'You do not have access to this resource' });
            return
        }
        next()
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while checking admin rights' });
    }
}