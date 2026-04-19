import { Router } from "express";
import tarefaRouter from "./tarefa.routes.js";
const routes = Router();
routes.use("/tarefas", tarefaRouter);

export default routes;