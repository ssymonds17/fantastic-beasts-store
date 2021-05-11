import React, { useState, useContext } from 'react';

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState('');
  const [detailProduct, setDetailProduct] = useState('Default Product');

  // Functions
  const handleDetails = () => {
    console.log('Handle the details');
  };
  const addToCart = () => {
    console.log('Add to cart');
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
