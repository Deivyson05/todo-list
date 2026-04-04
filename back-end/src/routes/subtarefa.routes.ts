
import { Router } from "express";
import { SubTarefaController } from "../controllers/subtarefa.controller";
            
const subtarefaRouter = Router();
            
subtarefaRouter.post("/", SubTarefaController.create);
subtarefaRouter.get("/:tarefaId", SubTarefaController.getAllFromTarefa);
subtarefaRouter.put("/", SubTarefaController.edit);
            
export default subtarefaRouter;