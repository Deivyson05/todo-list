
import { Router } from "express";
import { SubTarefaController } from "../controllers/subtarefa.controller";
            
const subtarefaRouter = Router();
            
subtarefaRouter.post("/", SubTarefaController.create);
            
export default subtarefaRouter;
    