
import { Request, Response } from "express";
import { HttpError } from "../core/httpError";
import { SubTarefaService } from "../services/subtarefa.service";
import { middleware } from "../core/middeware";
        
export class SubTarefaController {
    static async create(req: Request, res: Response) {
        await middleware(async () => {
            await SubTarefaService.create(req.body);
            return res.status(201).json({ message: "created successfully" });
        }, res);
    }

    static async getAllFromTarefa(req: Request, res: Response) {
        await middleware(async () => {
            const subTarefas = await SubTarefaService.getAllFromTarefa(req.params.tarefaId);
            return res.status(200).json(subTarefas);
        }, res);
    }

    static async edit(req: Request, res: Response) {
        await middleware(async () => {
            await SubTarefaService.edit(req.body);
            return res.status(200).json({ message: "edited successfully" });
        }, res);
    }

    static async delete(req: Request, res: Response) {
        await middleware(async () => {
            await SubTarefaService.delete(req.params.subTarefaId);
            return res.status(200).json({ message: "deleted successfully" });
        }, res);
    }
}
    