import axios from 'axios';

const API_URL = 'http://localhost:3000/registro';

export const createRegistro = async (registro) => {
  try {
    const response = await axios.post(API_URL, registro);
    return response.data;
  } catch (error) {
    console.error('Error al registrar:', error);
    throw error;
  }
};
