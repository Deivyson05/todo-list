import { Response } from "express";
import { HttpError } from "./httpError.js";
export async function middleware(func: () => Promise<any>, res: Response) {
    try {
        await func();
    } catch (err: HttpError | any) {
        console.error("Error:", err);
        return res.status(err.status || 500).json({ error: err.message });
    }
}