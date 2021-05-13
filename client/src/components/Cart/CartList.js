import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from '../../context';

export default function CartList() {
  const { cart } = useGlobalContext();

  return (
    <div className='container-fluid'>
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
}
