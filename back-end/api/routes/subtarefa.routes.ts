.js
import { Router } from "express";
import { SubTarefaController } from "../controllers/subtarefa.controller.js";
            
const subtarefaRouter = Router();
            
subtarefaRouter.post("/", SubTarefaController.create);
subtarefaRouter.get("/:tarefaId", SubTarefaController.getAllFromTarefa);
subtarefaRouter.put("/", SubTarefaController.edit);
subtarefaRouter.patch("/:id", SubTarefaController.updateStatus);
subtarefaRouter.delete("/:id", SubTarefaController.delete);
            
export default subtarefaRouter;