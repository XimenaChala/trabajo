import axios from 'axios';
import { API_BASE_URL } from './api-config';
const ESTUDIANTES_API_URL = `${API_BASE_URL}/estudiantes`;
export const getAllEstudiantes = async () => {
    try {
        const { data } = await axios.get(ESTUDIANTES_API_URL);
        return data;
    }
    catch (error) {
        console.error('Error al obtener estudiantes:', error);
        throw error;
    }
};
export const findEstudiantesById = async (id) => {
    try {
        const { data } = await axios.get(`${ESTUDIANTES_API_URL}/${id}`);
        return data;
    }
    catch (error) {
        console.error(`Error al obtener estudiantes ID ${id}:`, error);
        throw error;
    }
};
export const saveEstudiantes = async (estudiantesData) => {
    try {
        const { data } = await axios.post(ESTUDIANTES_API_URL, estudiantesData);
        return data;
    }
    catch (error) {
        console.error('Error al guardar estudiantes:', error);
        throw error;
    }
};
export const updateEstudiantes = async (estudiantesData, id) => {
    try {
        const { data } = await axios.put(`${ESTUDIANTES_API_URL}/${id}`, estudiantesData);
        return data;
    }
    catch (error) {
        console.error(`Error al actualizar estudiantes ID ${id}:`, error);
        throw error;
    }
};
export const deleteEstudiantes = async (id) => {
    try {
        const { data } = await axios.delete(`${ESTUDIANTES_API_URL}/${id}`);
        return data;
    }
    catch (error) {
        console.error(`Error al eliminar estudiantes ID ${id}:`, error);
        throw error;
    }
};
