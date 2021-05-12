import React, { useEffect } from 'react';
import { fetchProducts } from '../apis/product';
import { useGlobalContext } from '../context';
import Product from './Product';
import Title from './Title';

export default function ProductList() {
  const { products, setProducts } = useGlobalContext();

  const loadProducts = async () => {
    const newProducts = await fetchProducts();
    newProducts.forEach((item) => {
      item.inCart = false;
      item.price = parseInt(item.price);
    });
    setProducts(newProducts);
  };

  useEffect(() => {
    if (!products) {
      loadProducts();
    }
    console.log(products);
  }, [products]);

  if (!products) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title title='our products' />
            <div className='row'>
              {products.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
