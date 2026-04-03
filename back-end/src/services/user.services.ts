import { prisma } from "../../lib/prisma";
import { comparePassword, hashPassword } from "../core/hash";
import { HttpError } from "../core/httpError";
import createToken from "../core/token";

export class UserService {
    static async createUser(body: any) {
        const { name, email, password } = body;

        if (!name || !email || !password) {
            throw new HttpError("Name, email, and password are required", 400);
        }

        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: await hashPassword(password),
                token: createToken(),
                tarefas: {},
            },
            include: {
                tarefas: true,
            },
        });
    }

    static async login(body: any) {
        const { email, password } = body;

        if (!email || !password) {
            throw new HttpError("Email and password are required", 400);
        }

        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            throw new HttpError("Invalid email or password", 401);
        }

        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            throw new HttpError("Invalid email or password", 401);
        }

        return user.token;
    }
}