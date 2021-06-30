import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { loginUser } from '../apis/auth';
import './styles/register.css';

export default function Login() {
  const { setUserInLocalStorage } = useGlobalContext();
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async (data) => {
    try {
      const user = await loginUser(data);
      setError('');
      setUserInLocalStorage(user.id);
      history.push('/');
    } catch (err) {
      const newError = err.message;
      console.log('Error message: ', newError);
      setError(newError);
    }
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-wrapper'>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validateOnBlur
            onSubmit={async (data) => {
              await handleLogin(data);
            }}
          >
            <Form className='form'>
              <header className='text-center'>
                <h1>Login</h1>
              </header>
              <label htmlFor='username'>Email</label>
              <Field
                // Username values required so that passport can process email as "username" during authentication
                id='username'
                name='username'
                placeholder='email@example.com'
                required
              />
              <label htmlFor='password'>Password</label>
              <Field
                id='password'
                name='password'
                placeholder='Password'
                type='password'
                required
              />
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
              {error && (
                <div>
                  <strong>{error}</strong>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
      <div className='text-center mt-3'>
        <div className='social-btn-container'>
          <h3>Login with Google</h3>
          {/* PRODUCTION */}
          <button className='btn btn-danger google-btn'>
            <a href='https://fantastic-beasts-store.herokuapp.com/api/v1/auth/google'>
              Google
            </a>
          </button>
          {/* DEVELOPMENT */}
          {/* <button className='btn btn-danger google-btn'>
            <a href='http://localhost:8080/api/v1/auth/google'>Google</a>
          </button> */}
        </div>
        <h3>Need to register?</h3>
        <Link to='/register'>
          <button className='btn btn-success'>Register</button>
        </Link>
      </div>
    </div>
  );
}
