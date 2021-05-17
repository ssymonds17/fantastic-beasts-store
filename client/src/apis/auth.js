import axios from 'axios';
import { baseUrl } from './base';

// API interface for auth calls
export const registerUser = async (data) => {
  if (!data) {
    return null;
  }
  try {
    const response = await axios.post(`${baseUrl}/auth/register`, data);
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const loginUser = async (data) => {
  if (!data) {
    return null;
  }

  try {
    const response = await axios.post(`${baseUrl}/auth/login`, data);
    // For local checks
    // const response = await axios.post(
    //   `http://localhost:8080/api/v1/auth/login`,
    //   data
    // );
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};
