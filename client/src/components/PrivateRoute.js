import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useGlobalContext } from '../context';

const PrivateRoute = ({ Component, loginRequired }) => {
  const { loggedIn } = useGlobalContext();

  if (loginRequired) {
    return (
      <Route
        render={(props) =>
          !loggedIn ? <Component {...props} /> : <Redirect to='/login' />
        }
      />
    );
  } else {
    return (
      <Route
        render={(props) =>
          loggedIn ? <Component {...props} /> : <Redirect to='/' />
        }
      />
    );
  }
};

export default PrivateRoute;
