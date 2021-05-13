import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import { useGlobalContext } from '../../context';

export default function Cart() {
  const { cart } = useGlobalContext();

  if (cart.length > 0) {
    return (
      <section>
        <Title title='your cart' />
        <CartColumns />
        <CartList />
      </section>
    );
  } else {
    return (
      <section>
        <EmptyCart />
      </section>
    );
  }
}
