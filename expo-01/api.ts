import axios from "axios";

const baseUrl = "http://localhost:3000";

export class api {
    static async cadastro(body: any) {
        try {
            const response = await axios.post(`${baseUrl}/users`, body);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async login(body: any) {
        try {
            const response = await axios.post(`${baseUrl}/auth/login`, body);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async getUser(token: string) {
        try {
            const response = await axios.get(`${baseUrl}/users/${token}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async getTarefas(token: string) {
        try {
            const response = await axios.get(`${baseUrl}/tarefas/${token}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async createTarefa(body: any) {
        try {
            const response = await axios.post(`${baseUrl}/tarefas`, body);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async createSubTarefa(body: any) {
        try {
            const response = await axios.post(`${baseUrl}/subtarefas`, body);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async getSubTarefas(tarefaId: string) {
        try {
            const response = await axios.get(`${baseUrl}/subtarefas/${tarefaId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async updateTarefa(body: any) {
        try {
            const response = await axios.put(`${baseUrl}/tarefas`, body);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async updateSubTarefa(body: any) {
        try {
            const response = await axios.put(`${baseUrl}/subtarefas`, body);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteTarefa(id: string) {
        try {
            const response = await axios.delete(`${baseUrl}/tarefas/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteSubTarefa(id: string) {
        try {
            const response = await axios.delete(`${baseUrl}/subtarefas/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async updateStatusTarefa(id: number) {
        try {
            const response = await axios.put(`${baseUrl}/tarefas/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async updateStatusSubTarefa(id: number) {
        try {
            const response = await axios.put(`${baseUrl}/subtarefas/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}