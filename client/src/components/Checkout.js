import React from 'react';
import { useGlobalContext } from '../context';
import '../components/styles/checkout.css';

export default function Checkout() {
  const { cart, cartSubTotal, cartTax, cartTotal } = useGlobalContext();
  return (
    <div className='container checkout'>
      <header className='checkout-header'>
        <h1>Checkout Confirmation</h1>
      </header>
      <div className='checkout-table'>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.count}</td>
                  <td>{item.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='totals-container'>
        <h5>
          subtotal: <strong>¥{cartSubTotal}</strong>
        </h5>
        <h5>
          tax: <strong>¥{cartTax}</strong>
        </h5>
        <h5 className='total-amount'>
          total: <strong>¥{cartTotal}</strong>
        </h5>
      </div>
      <div className='checkout-confirm-btn'>
        <button className='btn btn-success checkout-btn'>Confirm</button>
      </div>
    </div>
  );
}
