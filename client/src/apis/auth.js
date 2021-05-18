import axios from 'axios';
import { baseUrl } from './base';

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
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const isLoggedIn = async () => {
  try {
    // const response = await axios.get(`${baseUrl}/auth/login`, data);
    const response = await axios.get(
      `http://localhost:8080/api/v1/auth/logged_in`
    );
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};
