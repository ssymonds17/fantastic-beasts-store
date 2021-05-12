import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import './styles/button-container.css';

export default function Modal() {
  const { openModal, modalProduct, closeModal } = useGlobalContext();
  const { image, name, price } = modalProduct;

  if (!modalOpen) {
    return null;
  } else {
    return (
      <div className='modal-container'>
        <h3>Hello From Modal</h3>
      </div>
    );
  }
}
