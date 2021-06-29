import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/checkout.css';

export default function CheckoutSuccess() {
  return (
    <div className='container'>
      <main className='success-container'>
        <h1>Order Complete</h1>
        <h3>
          Your order has been successful. Return to the home page to continue
          shopping or visit your profile page to view previous orders
        </h3>
        <Link to='/'>
          <button className='btn btn-success return-btn'>Return Home</button>
        </Link>
      </main>
    </div>
  );
}
