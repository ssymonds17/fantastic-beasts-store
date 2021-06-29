import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { registerUser, getUserByEmail } from '../apis/auth';
import { useGlobalContext } from '../context';
import './styles/register.css';

export default function Register() {
  const { setUserInLocalStorage } = useGlobalContext();

  const [error, setError] = useState('');
  const history = useHistory();

  const handleRegister = async (data) => {
    const validate = await submitValidation(data);

    if (!validate) {
      return null;
    }

    try {
      const { email } = data;
      await registerUser(data);
      setError('');
      const user = await getUserByEmail(email);
      setUserInLocalStorage(user.id);
      history.push('/');
    } catch (err) {
      const newError = err.message;
      setError(newError);
    }
  };

  const submitValidation = (data) => {
    const { email, password, confirmPassword } = data;
    // Check to see if the email address is valid
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError('Invalid email address');
      return null;
    }
    // Check that passwords match
    if (password !== confirmPassword) {
      setError('Passwords must match');
      return null;
    }
    return 'Valid';
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-wrapper'>
          <Formik
            initialValues={{
              first_name: '',
              last_name: '',
              email: '',
              password: '',
              confirmPassword: ''
            }}
            validateOnBlur
            onSubmit={async (data) => {
              await handleRegister(data);
            }}
          >
            <Form className='form'>
              <header className='text-center'>
                <h1>Register</h1>
              </header>
              <label htmlFor='first_name'>First Name</label>
              <Field
                id='first_name'
                name='first_name'
                placeholder='John'
                required
              />
              <label htmlFor='last_name'>Last Name</label>
              <Field
                id='last_name'
                name='last_name'
                placeholder='Doe'
                required
              />
              <label htmlFor='email'>
                Email<small>*</small>
              </label>
              <Field
                id='email'
                name='email'
                placeholder='email@example.com'
                required
              />
              <label htmlFor='password'>
                Password<small>*</small>
              </label>
              <Field
                id='password'
                name='password'
                placeholder='Password'
                type='password'
                required
              />
              <label htmlFor='confirmPassword'>
                Confirm Password<small>*</small>
              </label>
              <Field
                id='confirmPassword'
                name='confirmPassword'
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
        <h3>Already registered?</h3>
        <Link to='/login'>
          <button className='btn btn-success'>Log In</button>
        </Link>
      </div>
    </div>
  );
}
