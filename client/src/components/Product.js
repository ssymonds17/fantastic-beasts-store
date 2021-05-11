import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
  const { id, name, description, price, image } = product;
  return (
    <div className='product-wrapper col-9 mx-auto col-md-6 col-lg-3 my-3'>
      <div className='card'>
        <div className='img-container p-5' onClick={() => console.log(image)}>
          <Link to='details'>
            <img src={`img/${image}`} alt='product' className='card-img-top' />
          </Link>
        </div>
        <h3>{name}</h3>
        <h5>{description}</h5>
        <h3>¥{price}</h3>
      </div>
    </div>
  );
}
