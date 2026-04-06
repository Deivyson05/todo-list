import express from "express";
import cors from "cors";
import "dotenv/config";
import { prisma } from "../lib/prisma";
import routes from "./routes";

//import router from "./routes/index";

const app: express.Application = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes);

export default app;