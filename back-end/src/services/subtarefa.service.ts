
import { prisma } from "../../lib/prisma";
import { HttpError } from "../core/httpError";

export class SubTarefaService {
    static async create(body: any) {
        const { title, tarefaId } = body;

        if (!title || !tarefaId) {
           throw new HttpError("Title and tarefaId are required", 400);
        }

        const subTarefaDB = await prisma.subTarefa.create({
           data: {
               title: title,
               tarefaId: parseInt(tarefaId),
           },
        });
    }

    static async getAllFromTarefa(tarefaId: string) {
        const subTarefas = await prisma.subTarefa.findMany({
            where: {
                tarefaId: parseInt(tarefaId)
            }
        });
        return subTarefas;
    }

    static async edit(subTarefaId: string, body: any) {
        const { title } = body;

        if (!title) {
           throw new HttpError("Title is required", 400);
        }

        await prisma.subTarefa.update({
           where: {
               id: parseInt(subTarefaId),
           },
           data: {
               title: title,
           },
        });
    }

    static async delete(subTarefaId: string) {
        await prisma.subTarefa.delete({
            where: {
                id: parseInt(subTarefaId),
            },
        });
    }
}
    