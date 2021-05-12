import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import './styles/button-container.css';

export default function Details() {
  const { detailProduct, addToCart } = useGlobalContext();
  const { id, name, description, price, image, inCart } = detailProduct;

  return (
    <div className='container py-5'>
      {/* Name */}
      <div className='row'>
        <div className='col-10 mx-auto text-center my-5'>
          <h1>{name}</h1>
        </div>
      </div>
      {/* End of name */}
      {/* Product Info */}
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <img src={`img/${image}`} className='img-fluid' alt='product' />
        </div>
        {/* Product Text */}
        <div className='col-10 mx-auto col-md-6 my-3'>
          <h4>
            <strong>
              Price : <span>¥</span>
              {price}
            </strong>
          </h4>
          <p className='font-weight-bold mt-3 mb-0'>
            Some info about the product
          </p>
          <p className='text-muted lead'>{description}</p>
          {/* Buttons */}
          <Link to='/'>
            <button className='button-container text-capitalize'>
              back to products
            </button>
          </Link>
          <button
            className='button-container text-capitalize to-cart'
            disabled={inCart ? true : false}
            onClick={() => addToCart(id)}
          >
            {inCart ? 'in cart' : 'add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
