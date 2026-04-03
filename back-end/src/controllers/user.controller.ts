import { Request, Response } from "express";
import { HttpError } from "../core/httpError";
import { UserService } from "../services/user.services";
import { middleware } from "../core/middeware";

export class UserController {
    static async createUser(req: Request, res: Response) {
        try {
            await UserService.createUser(req.body);
            return res.status(201).json({ message: "User created successfully" });
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }

    static async login(req: Request, res: Response) {
        middleware(async () => {
            const token = await UserService.login(req.body);
            return res.status(200).json({ token });
        }, res);
    }
}