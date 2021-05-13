import React, { useState, useEffect, useContext } from 'react';
import { fetchProducts } from './apis/product';

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
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // Functions ------------------------>
  const loadProducts = async () => {
    const newProducts = await fetchProducts();
    newProducts.forEach((item) => {
      item.price = parseInt(item.price);
      item.inCart = false;
      item.count = 0;
      item.total = 0;
    });
    setProducts(newProducts);
  };

  const getItem = (id) => {
    const newProduct = products.find((item) => item.id === id);
    return newProduct;
  };

  const handleDetails = (id) => {
    const product = getItem(id);
    setDetailProduct(product);
  };

  const addToCart = async (id) => {
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

  useEffect(() => {
    addTotals();
  }, [cart]);

  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const increment = (id) => {
    console.log('Increment');
  };

  const decrement = (id) => {
    console.log('Decrement');
  };

  const removeItem = (id) => {
    console.log('Item removed');
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    if (cart.length === 0) {
      loadProducts();
      addTotals();
    } else {
      return null;
    }
  }, [cart]);

  const addTotals = () => {
    let subTotal = 0;
    cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.2;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loadProducts,
        detailProduct,
        cart,
        addToCart,
        cartSubTotal,
        cartTax,
        cartTotal,
        clearCart,
        handleDetails,
        increment,
        decrement,
        removeItem,
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
