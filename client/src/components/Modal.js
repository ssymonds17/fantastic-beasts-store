import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import './styles/button-container.css';

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
            <div className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'>
              <h5>item added to the cart</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
