
import { Request, Response } from "express";
import { HttpError } from "../core/httpError.js";
import { TarefaService } from "../services/tarefa.service.js";
import { middleware } from "../core/middeware.js";
        
export class TarefaController {
    static async create(req: Request, res: Response) {
        middleware(async() => {
            await TarefaService.create(req.body);
            return res.status(201).json({ message: "created successfully" });
        }, res);
    }

    static async getAllFromUser(req: Request, res: Response) {
        middleware(async() => {
            const tarefas = await TarefaService.getAllFromUser(req.params.userToken);
            return res.status(200).json(tarefas);
        }, res);
    }

    static async update(req: Request, res: Response) {
        middleware(async() => {
            await TarefaService.edit(req.body);
            return res.status(200).json({ message: "updated successfully" });
        }, res);
    }

    static async updateStatus(req: Request, res: Response) {
        middleware(async() => {
            await TarefaService.updateStatus(parseInt(req.params.id));
            return res.status(200).json({ message: "updated successfully" });
        }, res);
    }

    static async delete(req: Request, res: Response) {
        middleware(async() => {
            await TarefaService.delete(parseInt(req.params.id));
            return res.status(200).json({ message: "deleted successfully" });
        }, res);
    }
}
    