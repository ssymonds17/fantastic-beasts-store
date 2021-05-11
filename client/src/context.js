import React, { useState, useContext } from 'react';

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState('');
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ProductContext);
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
