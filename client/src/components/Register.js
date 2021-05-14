import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../apis/auth';

export default function Register() {
  const history = useHistory();

  const handleRegister = async (credentials) => {
    try {
      await registerUser(credentials);
      history.push('/');
    } catch (err) {}
  };

  // Validation schema for registration form
  const registrationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email address is required'),

    password: Yup.string().required('Password is required'),

    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    )
  });

  return (
    <div className='container-fluid'>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validateSchema={registrationSchema}
        validateOnBlur
        onSubmit={async (data) => {
          const { confirmPassword, ...credentials } = data;
          await handleRegister(credentials);
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
        </Form>
      </Formik>
    </div>
  );
}
