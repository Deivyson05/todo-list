import { Router } from "express";
import { prisma } from "../../lib/prisma";
import { UserController } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/", UserController.createUser);
userRouter.post("/login", UserController.login);
userRouter.get("/:token", UserController.getUser);

export default userRouter;