import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username required')
    .min(5, 'Minimum of 5 characters required')
    .max(20, 'Maximum of 20 characters required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email required'),
  password: Yup.string()
    .required('Password required')
    .min(8, 'Password should be more than 8 characters'),
  confirmPassword: Yup.string()
    .required('This field is required')
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    })
})

function Signup () {
  return (
    <div
      style={{
        maxWidth: '450px',
        boxShadow: '0px 0px 50px -10px lightgray',
        borderRadius: '30px',
        minHeight: '400px',
        position: 'relative'
      }}
      className='w-100 mt-4 signup-wrapper p-4 border-1'
    >
      <h3
        style={{
          top: '30px',
          left: '40px'
        }}
        className='position-absolute fw-bold mt-2 mb-4'
      >
        SIGN UP
      </h3>

      <Formik
        // enableReinitialize
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={SignupSchema}
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
          <form className='p-3 mt-5' onSubmit={handleSubmit}>
            <div className='form-group text-start input-field-wrapper'>
              <input
                onChange={handleChange}
                type='text'
                placeholder='Username'
                className='form-control'
                value={values.username}
                onBlur={handleBlur}
                required
                name='username'
                id='username'
              />

              {errors.username && touched.username ? (
                <div className='text-danger'>{errors.username}</div>
              ) : null}
            </div>
            <br />

            <div className='form-group text-start input-field-wrapper'>
              {/* <label htmlFor='email-input'>Email</label> */}
              <input
                onChange={handleChange}
                type='email'
                placeholder='Email'
                className='form-control'
                value={values.email}
                onBlur={handleBlur}
                required
                name='email'
                id='email'
              />

              {errors.email && touched.email ? (
                <div className='text-danger'>{errors.email}</div>
              ) : null}
            </div>
            <br />

            <div className='form-group text-start input-field-wrapper'>
              <input
                onChange={handleChange}
                type='password'
                placeholder='Password'
                className='form-control'
                value={values.password}
                onBlur={handleBlur}
                required
                name='password'
                id='password'
              />

              {errors.password && touched.password ? (
                <div className='text-danger'>{errors.password}</div>
              ) : null}
            </div>
            <br />

            <div className='form-group text-start input-field-wrapper'>
              <input
                onChange={handleChange}
                type='password'
                placeholder='Confirm Password'
                className='form-control'
                value={values.confirmPassword}
                onBlur={handleBlur}
                required
                name='confirm-password'
                id='confirm-password'
              />

              {errors.confirmPassword && touched.confirmPassword ? (
                <div className='text-danger'>{errors.confirmPassword}</div>
              ) : null}
            </div>
            <br />

            <div className='form-group input-field-wrapper'>
              <button
                className='btn btn-outline-danger w-100'
                disabled={isSubmitting}
                type='submit'
              >
                SIGN UP
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Signup
