import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';

export default function Cart() {
  return (
    <section>
      <Title title='your cart' />
      <CartColumns />
      <EmptyCart />
    </section>
  );
}
