import React from 'react';
import { useGlobalContext } from '../../context';

export default function CartItem({ item }) {
  const { id, name, image, price, total, count } = item;
  const { increment, decrement, removeItem } = useGlobalContext();

  return (
    <div className='row my-2 text-captalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img
          className='img-fluid'
          src={`img/${image}`}
          style={{ width: '5rem', height: '5rem' }}
          alt='product'
        />
      </div>
      <div className='col-10 mx-auto col-lg-2'>{name}</div>
      <div className='col-10 mx-auto col-lg-2'>¥{price}</div>
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <span className='btn btn-black mx-1' onClick={() => decrement(id)}>
              -
            </span>
            <span className='btn btn-black mx-1'>{count}</span>
            <span className='btn btn-black mx-1' onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='col-10 mx-auto col-lg-2 text-capitalize'>
        <div className='cart-icon' onClick={() => removeItem(id)}>
          <i className='fas fa-trash' />
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2 text-capitalize'>
        <strong>item total: ¥{total}</strong>
      </div>
    </div>
  );
}
