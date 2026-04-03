
import { Router } from "express";
import { TarefaController } from "../controllers/tarefa.controller";
            
const tarefaRouter = Router();
            
tarefaRouter.post("/", TarefaController.create);
tarefaRouter.get("/:userId", TarefaController.getAllFromUser);
            
export default tarefaRouter;
    