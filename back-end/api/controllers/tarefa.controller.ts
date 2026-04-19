import { Request, Response } from "express";
import { TarefaService } from "../services/tarefa.service.js";
import { middleware } from "../core/middleware.js";
        
export class TarefaController {
    static async create(req: Request, res: Response) {
        middleware(async () => {
            await TarefaService.create(req.body);
            return res.status(201).json({ message: "created successfully" });
        }, res);
    }

    static async list(req: Request, res: Response) {
        middleware(async () => {
            const tarefas = await TarefaService.list();
            return res.status(200).json(tarefas);
        }, res);
    }

    static async update(req: Request, res: Response) {
        middleware(async () => {
            const { id } = req.params;
            await TarefaService.update(id, req.body);
            return res.status(200).json({ message: "updated successfully" });
        }, res);
    }

    static async concluir(req: Request, res: Response) {
        middleware(async () => {
            const { id } = req.params;
            await TarefaService.concluir(id);
            return res.status(200).json({ message: "tarefa concluída" });
        }, res);
    }
    
    static async delete(req: Request, res: Response){
        middleware (async()=> {
            const {id} =req.params;
            await TarefaService.delete(id);
            return res.status(200).json({message: "deleted successfully"});
        }, res);
    }
}