import React from 'react';
import Product from './Product';
import Title from './Title';

export default function ProductList() {
  return (
    <React.Fragment>
      <div className='py-5'>
        <div className='container'>
          <Title title='our products' />
          <div className='row'></div>
        </div>
      </div>
    </React.Fragment>
  );
}
