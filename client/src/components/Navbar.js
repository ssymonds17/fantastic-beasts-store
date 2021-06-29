import React from 'react';
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
      <ul className='navbar-nav align-items-centre'>
        <li className='nav-item ml-5'>
          <Link to='/' className='nav-link'>
            home
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
          <Link to={`/users/${user.id}`}>
            <button className='button-container user-btn'>
              {user.first_name}
            </button>
          </Link>
          <button
            className='button-container logout-btn'
            onClick={() => logout()}
          >
            Logout
          </button>
        </>
      )}
      {/* If no user then display login button */}
      {!user && (
        <Link to='/login'>
          <button className='button-container login-btn'>Login</button>
        </Link>
      )}
    </nav>
  );
}
