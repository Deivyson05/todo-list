import { Router } from "express";
import userRouter from "./user.route.js";
import tarefaRouter from "./tarefa.routes.js";
import subtarefaRouter from "./subtarefa.routes.js";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/tarefas", tarefaRouter);
routes.use("/subtarefas", subtarefaRouter);

export default routes;