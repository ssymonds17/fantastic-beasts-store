import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useGlobalContext } from '../context';

const PrivateRoute = ({ Component }) => {
  const { currentUser } = useGlobalContext();

  return (
    <Route
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};

export default PrivateRoute;
