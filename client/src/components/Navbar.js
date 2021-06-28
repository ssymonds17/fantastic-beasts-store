import React from 'react';
import logo from '../logo.svg';
import '../components/styles/button-container.css';
import { Link, useHistory } from 'react-router-dom';

export default function Navbar({ user }) {
  const history = useHistory();

  const logout = async () => {
    localStorage.removeItem('user_id');
    history.push('/');
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark px-sm-5 nav-wrapper'>
      <Link to='/'>
        <img
          // TODO Change logo to relevant SVG
          src={logo}
          alt='store'
          className='navbar-brand'
          style={{ color: 'red' }}
        />
      </Link>
      <ul className='navbar-nav align-items-centre'>
        <li className='nav-item ml-5'>
          <Link to='/' className='nav-link'>
            products
          </Link>
        </li>
      </ul>
      <Link to='/cart' className='ml-auto'>
        <button className='button-container'>
          <i className='fas fa-cart-plus' />
          my cart
        </button>
      </Link>
      {/* Conditionally display user account and logout buttons */}
      {user && (
        <>
          <button style={{ textTransform: 'capitalize' }}>
            {user.first_name}
          </button>
          <button onClick={() => logout()}>Logout</button>
        </>
      )}
    </nav>
  );
}
