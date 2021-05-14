import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { registerUser } from '../apis/auth';
import './styles/register.css';

export default function Login() {
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async (data) => {
    const { credentials } = data;
    try {
      // Change to loginUser(credentials)
      // await registerUser(credentials);
      setError('');
      history.push('/');
    } catch (err) {
      const newError = err.message;
      setError(newError);
    }
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-wrapper'>
          <Formik
            initialValues={{
              email: '',
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
              <label htmlFor='email'>Email</label>
              <Field
                id='email'
                name='email'
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
        <h3>Need to register?</h3>
        <Link to='/register'>
          <button className='btn btn-success'>Register</button>
        </Link>
      </div>
    </div>
  );
}
