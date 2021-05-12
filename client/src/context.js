import React, { useState, useContext } from 'react';

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [detailProduct, setDetailProduct] = useState({
    id: 1,
    name: 'Basilisk',
    description: 'Default description',
    price: 650,
    image: 'basilisk.png'
  });
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);

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
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    let newCart = [...cart];
    newCart.push(product);

    setProducts(tempProducts);
    setCart(newCart);
  };

  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        detailProduct,
        addToCart,
        handleDetails,
        modalOpen,
        modalProduct,
        openModal,
        closeModal
      }}
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
