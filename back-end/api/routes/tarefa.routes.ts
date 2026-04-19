
import { Router } from "express";
import { TarefaController } from "../controllers/tarefa.controller";
            
const tarefaRouter = Router();
            
tarefaRouter.post("/", TarefaController.create);
tarefaRouter.get("/", TarefaController.list);
tarefaRouter.put("/:id", TarefaController.update);
tarefaRouter.delete("/:id", TarefaController.delete);
            
export default tarefaRouter;
    