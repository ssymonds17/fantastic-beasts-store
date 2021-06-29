import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutSuccess() {
  return (
    <div className='container'>
      <main className='success-container'>
        <h1>Order Complete</h1>
        <Link to='/'>
          <button className='btn btn-success'>Return Home</button>
        </Link>
      </main>
    </div>
  );
}
