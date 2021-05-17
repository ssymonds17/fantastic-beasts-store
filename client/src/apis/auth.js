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
  console.log('loginUser', data);

  if (!data) {
    return null;
  }
  console.log(data);

  try {
    const response = await axios.post(`${baseUrl}/auth/login`, data);
    console.log(response.data);

    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};
