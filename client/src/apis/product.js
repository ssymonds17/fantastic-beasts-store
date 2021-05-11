import axios from 'axios';

// API interface for loading products
export const fetchProducts = async () => {
  const url = `https://fantastic-beasts-store.herokuapp.com/api/v1/products`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};
