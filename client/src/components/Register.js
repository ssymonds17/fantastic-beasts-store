import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../apis/auth';

export default function Register() {
  const [error, setError] = useState('');
  const history = useHistory();

  const handleRegister = async (data) => {
    const validate = await submitValidation(data);

    if (!validate) {
      return null;
    }

    const { credentials } = data;
    try {
      await registerUser(credentials);
      setError('');
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
          <Field
            id='first_name'
            name='first_name'
            placeholder='John'
            required
          />
          <label htmlFor='last_name'>Last Name</label>
          <Field id='last_name' name='last_name' placeholder='Doe' required />
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
            placeholder='password'
            type='password'
            required
          />
          <label htmlFor='confirmPassword'>
            Confirm Password<small>*</small>
          </label>
          <Field
            id='confirmPassword'
            name='confirmPassword'
            placeholder='password'
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
  );
}
