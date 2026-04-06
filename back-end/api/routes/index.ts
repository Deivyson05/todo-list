import { Router } from "express";
import userRouter from "./user.route";
import tarefaRouter from "./tarefa.routes";
import subtarefaRouter from "./subtarefa.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/tarefas", tarefaRouter);
routes.use("/subtarefas", subtarefaRouter);

export default routes;