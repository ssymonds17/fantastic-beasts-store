import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalContext } from './context';
import { isLoggedIn } from './apis/auth';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const { currentUser, setCurrentUser } = useGlobalContext();

  useEffect(() => {
    async function checkLoggedIn() {
      const response = await isLoggedIn();
      return response;
    }

    const user = checkLoggedIn();
    if (!user) {
      return null;
    } else {
      setCurrentUser(user);
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
