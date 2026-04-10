
import { title } from "node:process";
import { prisma } from "../../lib/prisma.js";
import { HttpError } from "../core/httpError.js";
import { parse } from "node:path";

export class TarefaService {
    static async create(body: any) {
        const { title, description, dataAgendada, userToken } = body;

        if (!title || !userToken) {
            throw new HttpError("Title, description and userToken are required", 400);
        }

        const tarefaDB = await prisma.tarefa.create({
            data: {
                title: title,
                description: description,
                dataAgendada: dataAgendada,
                userToken: userToken,
                subTarefas: {},
            },
            include: {
                subTarefas: true,
            },
        });
    }

    static async getAllFromUser(userToken: string) {
        const tarefas = await prisma.tarefa.findMany({
            where: {
                userToken: userToken
            }
        });
        return tarefas;
    }

    static async edit(body: any) {
        const { id, title, description, dataAgendada } = body;

        if (!id || !title) {
            throw new HttpError("Id and title are required", 400);
        }

        await prisma.tarefa.update({
            where: {
                id: id
            },
            data: {
                title: title,
                description: description,
                dataAgendada: dataAgendada
            }
        });
    }

    static async updateStatus(tarefaId: number) {
        const tarefa = await prisma.tarefa.findUnique({
            where: {
                id: tarefaId
            }
        });

        if (!tarefa) {
            throw new HttpError("Tarefa not found", 404);
        }

        await prisma.tarefa.update({
            where: {
                id: tarefaId
            },
            data: {
                concluida: !tarefa.concluida
            }
        });
    }

    static async delete(tarefaId: number) {
        // deletar tarefas com subtarefas associadas
        await prisma.subTarefa.deleteMany({
            where: {
                tarefaId: tarefaId
            }
        });

        // deletar a tarefa
        await prisma.tarefa.delete({
            where: {
                id: tarefaId
            }
        });
    }
}