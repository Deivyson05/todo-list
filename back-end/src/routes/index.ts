import { Router } from "express";
import userRouter from "./user.route";
import tarefaRouter from "./tarefa.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/tarefas", tarefaRouter);

export default routes;