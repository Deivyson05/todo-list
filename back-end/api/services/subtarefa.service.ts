
import { prisma } from "../../lib/prisma.js";
import { HttpError } from "../core/httpError.js";

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

    static async edit(body: any) {
        const { id, title } = body;

        if (!title) {
           throw new HttpError("Title is required", 400);
        }

        await prisma.subTarefa.update({
           where: {
               id: id,
           },
           data: {
               title: title,
           },
        });
    }

    static async updateStatus(subTarefaId: number) {
        const subTarefa = await prisma.subTarefa.findUnique({
            where: {
                id: subTarefaId,
            },
        });

        if (!subTarefa) {
            throw new HttpError("Subtarefa not found", 404);
        }

        await prisma.subTarefa.update({
            where: {
                id: subTarefaId,
            },
            data: {
                concluida: !subTarefa.concluida,
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
    