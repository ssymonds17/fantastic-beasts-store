import axios from 'axios';
import { baseUrl } from './base';

// API interface for auth calls
export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/register`, data);
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};
