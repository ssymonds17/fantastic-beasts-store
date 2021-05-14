import axios from 'axios';
import { baseUrl } from './base';

// API interface for loading products
export const fetchProducts = async () => {
  // const url = `https://fantastic-beasts-store.herokuapp.com/api/v1/products`;
  try {
    const response = await axios.get(`${baseUrl}/products`);
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};
