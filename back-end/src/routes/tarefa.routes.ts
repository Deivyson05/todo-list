
import { Router } from "express";
import { TarefaController } from "../controllers/tarefa.controller";
            
const tarefaRouter = Router();
            
tarefaRouter.post("/", TarefaController.create);
tarefaRouter.get("/:userToken", TarefaController.getAllFromUser);
tarefaRouter.put("/" , TarefaController.update);
tarefaRouter.delete("/:id", TarefaController.delete);
            
export default tarefaRouter;
    