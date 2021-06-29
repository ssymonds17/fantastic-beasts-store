import React from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { createOrder } from '../apis/order';
import '../components/styles/checkout.css';

export default function Checkout() {
  const {
    currentUser,
    cart,
    cartSubTotal,
    cartTax,
    cartTotal,
    clearCart
  } = useGlobalContext();
  const history = useHistory();

  const handleOrderConfirmation = async () => {
    if (!currentUser || !cartTotal) {
      return null;
    }
    const data = { customer_id: currentUser.id, total: cartTotal };
    try {
      await createOrder(data);
      await clearCart();
      history.push('/checkout/confirm');
    } catch (err) {
      const newError = err.message;
      throw new Error(newError);
    }
  };

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
        <button
          className='btn btn-success checkout-btn'
          onClick={() => handleOrderConfirmation()}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
