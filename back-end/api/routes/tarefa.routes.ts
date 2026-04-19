
import { Router } from "express";
import { TarefaController } from "../controllers/tarefa.controller";
            
const tarefaRouter = Router();
            
tarefaRouter.post("/", TarefaController.create);
tarefaRouter.get("/", TarefaController.list);
tarefaRouter.put("/:id", TarefaController.update);
tarefaRouter.patch("/:id/concluir", TarefaController.concluir);
tarefaRouter.delete("/:id", TarefaController.delete);
            
export default tarefaRouter;
    