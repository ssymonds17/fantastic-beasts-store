import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
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
    <React.Fragment>
      <Navbar user={currentUser} />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/checkout/confirm' component={CheckoutSuccess} />
        <Route path='/users/:userId' component={UserProfile} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
