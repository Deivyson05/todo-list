import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { prisma } from "../lib/prisma";
import routes from "./routes/";


const app: express.Application = express();
app.use(cors());
app.use(express.json());

app.use(express.static("api/public"));

app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
    res.send("Servidor Aberto!")
})

export default app;

const port = 3000;
app.listen(port, () => {
    console.log(`Teste n1 ${port}`);
});
