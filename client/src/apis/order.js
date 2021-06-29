import axios from 'axios';
import { baseUrl } from './base';

export const createOrder = async (data) => {
  if (!data) {
    return null;
  }
  try {
    // const response = await axios.post(`${baseUrl}/orders`, data);
    const response = await axios.post(
      `http://localhost:8080/api/v1/orders`,
      data
    );
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};
