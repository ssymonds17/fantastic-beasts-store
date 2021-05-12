import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import './styles/button-container.css';
import './styles/modal-container.css';

export default function Modal() {
  const { modalOpen, modalProduct, closeModal } = useGlobalContext();
  const { image, name, price } = modalProduct;

  if (!modalOpen) {
    return null;
  } else {
    return (
      <div className='modal-container'>
        <div className='container'>
          <div className='row'>
            <div
              id='modal'
              className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'
            >
              <h5>item added to the cart</h5>
              <img src={`img/${image}`} className='img-fluid' alt='product' />
              <h5>{name}</h5>
              <h5 className='text-muted'>price: ¥{price}</h5>
              <Link to='/'>
                <button
                  className='button-container'
                  onClick={() => closeModal()}
                >
                  continue shopping
                </button>
              </Link>
              <Link to='/cart'>
                <button
                  className='button-container to-cart'
                  onClick={() => closeModal()}
                >
                  go to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
