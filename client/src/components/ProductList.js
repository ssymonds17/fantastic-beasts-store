import React, { useEffect } from 'react';
import { fetchProducts } from '../apis/product';
import { useGlobalContext } from '../context';
import Product from './Product';
import Title from './Title';

export default function ProductList() {
  const { products, setProducts } = useGlobalContext();

  const loadProducts = async () => {
    const newProducts = await fetchProducts();
    setProducts(newProducts);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <React.Fragment>
      <div className='py-5'>
        <div className='container'>
          <Title title='our products' />
          <div className='row'>
            <button onClick={() => console.log(products)}>
              Check Products
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
