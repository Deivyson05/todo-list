
import { Request, Response } from "express";
import { HttpError } from "../core/httpError";
import { TarefaService } from "../services/tarefa.service";
        
export class TarefaController {
    static async create(req: Request, res: Response) {
        try {
            await TarefaService.create(req.body);
            return res.status(201).json({ message: "created successfully" });
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }

    static async getAllFromUser(req: Request, res: Response) {
        try {
            const tarefas = await TarefaService.getAllFromUser(req.params.userId);
            return res.status(200).json(tarefas);
        } catch (err: HttpError | any) {
            console.error("Error:", err);
            return res.status(err.status || 500).json({ error: err.message });
        }
    }
}
    