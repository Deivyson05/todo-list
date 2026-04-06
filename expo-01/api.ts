import axios from "axios";

const baseUrl = "http://localhost:3000";

export const cadastro = async (body: any) => {
    try {
        const response = await axios.post(`${baseUrl}/users`, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const login = async (body: any) => {
    try {
        const response = await axios.post(`${baseUrl}/auth/login`, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getTarefas = async (token: string) => {
    try {
        const response = await axios.get(`${baseUrl}/tarefas/${token}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const createTarefa = async (body: any) => {
    try {
        const response = await axios.post(`${baseUrl}/tarefas`, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const createSubTarefa = async (body: any) => {
    try {
        const response = await axios.post(`${baseUrl}/subtarefas`, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getSubTarefas = async (tarefaId: string) => {
    try {
        const response = await axios.get(`${baseUrl}/subtarefas/${tarefaId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}