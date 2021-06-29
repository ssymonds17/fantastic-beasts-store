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
import Default from './components/Default';
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
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/cart' component={Cart} />
        {/* Private Routes */}
        <PrivateRoute exact path='/checkout' Component={Checkout} />
        <Route exact path='/checkout/confirm' Component={CheckoutSuccess} />
        <PrivateRoute exact path='/users/:userId' Component={UserProfile} />
        <Redirect from='*' to='/' />
      </Switch>
      <Modal />
    </Router>
  );
}

export default App;
