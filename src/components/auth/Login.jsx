import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email required'),
  password: Yup.string()
    .required('Password required')
    .min(8, 'Password should be more than 8 characters')
})

function Login () {
  return (
    <div
      style={{
        maxWidth: '450px',
        boxShadow: '0px 0px 50px -10px lightgray',
        borderRadius: '30px',
        minHeight: '300px',
        position: 'relative'
      }}
      className='w-100 h-100 mt-4 login-wrapper p-4 border-1'
    >
      <h3
        style={{
          top: '30px',
          left: '40px'
        }}
        className='position-absolute fw-bold mt-2 mb-4'
      >
        LOG IN
      </h3>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          setSubmitting(false)
          console.log(values)
          resetForm()
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form className='p-3 mt-5 w-100' onSubmit={handleSubmit}>
            <div className='form-group text-start input-field-wrapper'>
              <input
                placeholder='Email'
                className='form-control'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type='email'
                required
                name='email-input'
                id='email-input'
              />

              {errors.email && touched.email ? (
                <div className='text-danger'>{errors.email}</div>
              ) : null}
            </div>
            <br />

            <div className='form-group text-start input-field-wrapper'>
              <input
                placeholder='Password'
                className='form-control'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type='password'
                required
                name='password-input'
                id='password-input'
              />

              {errors.password && touched.password ? (
                <div className='text-danger'>{errors.password}</div>
              ) : null}
            </div>
            <br />

            <div className='form-group input-field-wrapper'>
              <button
                className='btn btn-outline-primary w-100'
                disabled={isSubmitting}
                type='submit'
              >
                LOG IN
              </button>
            </div>

            <div className='form-group mt-4'>
              <a href='#' className='link-dark text-decoration-underline'>
                Forgot password?
              </a>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Login
