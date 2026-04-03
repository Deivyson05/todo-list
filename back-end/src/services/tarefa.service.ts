
import { title } from "node:process";
import { prisma } from "../../lib/prisma";
import { HttpError } from "../core/httpError";
import { parse } from "node:path";

export class TarefaService {
    static async create(body: any) {
        const { title, description, dataAgendada, userId } = body;

        if (!title || !userId) {
            throw new HttpError("Title, description and userId are required", 400);
        }

        const tarefaDB = await prisma.tarefa.create({
            data: {
                title: title,
                description: description,
                dataAgendada: dataAgendada,
                userId: userId,
                subTarefas: {},
            },
            include: {
                subTarefas: true,
            },
        });
    }

    static async getAllFromUser(userId: string) {
        const tarefas = await prisma.tarefa.findMany({
            where: {
                userId: parseInt(userId)
            }
        });
        return tarefas;
    }

    static async delete(tarefaId: string) {
        // deletar tarefas com subtarefas associadas
        await prisma.subTarefa.deleteMany({
            where: {
                tarefaId: parseInt(tarefaId)
            }
        });

        // deletar a tarefa
        await prisma.tarefa.delete({
            where: {
                id: parseInt(tarefaId)
            }
        });
    }
}