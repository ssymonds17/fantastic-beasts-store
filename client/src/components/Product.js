import React from 'react';
import { Link } from 'react-router-dom';
import './styles/product-wrapper.css';

export default function Product({ product }) {
  const { id, name, description, price, image, inCart } = product;
  return (
    <div className='product-wrapper col-9 mx-auto col-md-6 col-lg-3 my-3'>
      <div className='card'>
        <div className='img-container p-5'>
          <Link to='details'>
            <img src={`img/${image}`} alt='product' className='card-img-top' />
          </Link>
          <button
            className='cart-btn'
            disabled={inCart ? true : false}
            onClick={() => console.log('Added to the cart')}
          >
            {inCart ? (
              <p className='text-capitalize mb-0' disabled>
                in cart
              </p>
            ) : (
              <i className='fas fa-cart-plus' />
            )}
          </button>
        </div>
        {/* Card Footer */}
        <div className='card-footer d-flex justify-content-between'>
          <p className='align-self-center mb-0'>{name}</p>
          <h5 className='font-italic mb-0'>
            <span className='mr-1'>¥{price}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
