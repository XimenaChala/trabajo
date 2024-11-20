import axios from 'axios';
import { API_BASE_URL } from './api-config';
const PROFESORES_API_URL = `${API_BASE_URL}/profesores`;
export const getAllProfesores = async () => {
    try {
        const { data } = await axios.get(PROFESORES_API_URL);
        return data;
    }
    catch (error) {
        console.error('Error al obtener profesores:', error);
        throw error;
    }
};
export const findProfesoresById = async (id) => {
    try {
        const { data } = await axios.get(`${PROFESORES_API_URL}/${id}`);
        return data;
    }
    catch (error) {
        console.error(`Error al obtener profesores ID ${id}:`, error);
        throw error;
    }
};
export const saveProfesores = async (profesoresData) => {
    try {
        const { data } = await axios.post(PROFESORES_API_URL, profesoresData);
        return data;
    }
    catch (error) {
        console.error('Error al guardar profesores:', error);
        throw error;
    }
};
export const updateProfesores = async (profesoresData, id) => {
    try {
        const { data } = await axios.put(`${PROFESORES_API_URL}/${id}`, profesoresData);
        return data;
    }
    catch (error) {
        console.error(`Error al actualizar profesores ID ${id}:`, error);
        throw error;
    }
};
export const deleteProfesores = async (id) => {
    try {
        const { data } = await axios.delete(`${PROFESORES_API_URL}/${id}`);
        return data;
    }
    catch (error) {
        console.error(`Error al eliminar profesores ID ${id}:`, error);
        throw error;
    }
};