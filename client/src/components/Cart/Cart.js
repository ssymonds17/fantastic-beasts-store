import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';

export default function Cart() {
  return (
    <section>
      <Title title='your cart' />
      <CartColumns />
    </section>
  );
}
