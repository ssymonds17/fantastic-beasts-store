import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';

export default function CartTotals() {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = useGlobalContext();
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
            <Link to='/'>
              <button
                className='btn btn-outline-danger text-uppercase mb-3 px-5'
                type='button'
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span>subtotal:</span>
              <strong>¥{cartSubTotal}</strong>
            </h5>
            <h5>
              <span>tax:</span>
              <strong>¥{cartTax}</strong>
            </h5>
            <h5>
              <span>total:</span>
              <strong>¥{cartTotal}</strong>
            </h5>
            <Link to='/checkout'>
              <button className='btn btn-outline-primary text-uppercase mb-3 px-5'>
                go to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
