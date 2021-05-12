import React, { useState, useContext } from 'react';

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState('');
  const [detailProduct, setDetailProduct] = useState({
    id: 1,
    name: 'Basilisk',
    description:
      'Reptile reputed to be a serpent king. Can cause death with a single glance.',
    price: 650,
    image: 'basilisk.png',
    inCart: false
  });

  // Functions
  const getItem = (id) => {
    const newProduct = products.find((item) => item.id === id);
    return newProduct;
  };
  const handleDetails = (id) => {
    const product = getItem(id);
    setDetailProduct(product);
  };
  const addToCart = (id) => {
    console.log(`Product with id of ${id} added to cart`);
  };
  return (
    <ProductContext.Provider
      value={{ products, setProducts, detailProduct, addToCart, handleDetails }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ProductContext);
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
