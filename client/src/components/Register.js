import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../apis/auth';

export default function Register() {
  const [error, setError] = useState('');
  const history = useHistory();

  const handleRegister = async (data) => {
    if (error) {
      setError('');
    }

    const validate = await submitValidation(data);

    if (!validate) {
      return null;
    }

    const { credentials } = data;
    try {
      await registerUser(credentials);
      history.push('/');
    } catch (err) {
      const newError = err.message;
      setError(newError);
    }
  };

  const submitValidation = (data) => {
    const { email, password, confirmPassword } = data;
    // Check if email and/or password exist
    if (!email) {
      setError('Email address is required');
      return null;
    }
    if (!password) {
      setError('Password is required');
      return null;
    }
    // Check that passwords match
    if (password !== confirmPassword) {
      setError('Passwords must match');
      return null;
    }
  };

  return (
    <div className='container-fluid'>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validateOnBlur
        onSubmit={async (data) => {
          await handleRegister(data);
        }}
      >
        <Form className='text-center mx-auto'>
          <header>
            <h1>Register</h1>
          </header>
          <label htmlFor='first_name'>First Name</label>
          <Field id='first_name' name='first_name' placeholder='John' />
          <label htmlFor='last_name'>Last Name</label>
          <Field id='last_name' name='last_name' placeholder='Doe' />
          <label htmlFor='email'>Email</label>
          <Field id='email' name='email' placeholder='email@example.com' />
          <label htmlFor='password'>Password</label>
          <Field
            id='password'
            name='password'
            placeholder='password'
            type='password'
          />
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <Field
            id='confirmPassword'
            name='confirmPassword'
            placeholder='password'
            type='password'
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
  );
}
