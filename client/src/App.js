import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalContext } from './context';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';
import Register from './components/Register';
import Login from './components/Login';
import Checkout from './components/Checkout';
import CheckoutSuccess from './components/CheckoutSuccess';
import UserProfile from './components/UserProfile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const {
    currentUser,
    setUserInLocalStorage,
    checkIdInUrl,
    checkLoggedIn
  } = useGlobalContext();

  useEffect(() => {
    if (checkIdInUrl()) {
      setUserInLocalStorage();
    }

    checkLoggedIn();
  }, []);

  return (
    <Router>
      <Navbar user={currentUser} />
      <Switch>
        {/* Public Routes */}
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        {/* Private Routes */}
        <PrivateRoute path='/register' Component={Register} loginBool={false} />
        <PrivateRoute path='/login' Component={Login} loginBool={false} />
        <PrivateRoute
          exact
          path='/checkout'
          Component={Checkout}
          loginBool={true}
        />
        <PrivateRoute
          exact
          path='/checkout/confirm'
          Component={CheckoutSuccess}
          loginBool={true}
        />
        <PrivateRoute
          exact
          path='/users/:userId'
          Component={UserProfile}
          loginBool={true}
        />
        <Redirect from='*' to='/' />
      </Switch>
      <Modal />
    </Router>
  );
}

export default App;
