import { Request, Response } from "express";
import { HttpError } from "../core/httpError";
import { UserService } from "../services/user.services";
import { middleware } from "../core/middeware";

export class UserController {
    static async createUser(req: Request, res: Response) {
        middleware(async () => {
            await UserService.createUser(req.body);
            return res.status(201).json({ message: "User created successfully" });
        }, res);
    }

    static async login(req: Request, res: Response) {
        middleware(async () => {
            const token = await UserService.login(req.body);
            return res.status(200).json({ token });
        }, res);
    }

    static async getUser(req: Request, res: Response) {
        middleware(async () => {
            const token = req.params.token;
            const user = await UserService.getUser(token);
            return res.status(200).json(user);
        }, res);
    }
}