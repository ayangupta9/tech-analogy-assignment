import React, { useContext, useState } from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import { AuthContext } from '../contexts/AuthContextProvider'
import { useNavigate } from 'react-router-dom'
import useAuthQuery from '../hooks/useAuthQuery'

function AuthPage () {
  const { auth, setAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSuccess = data => {
    if (data.status) {
      setAuth(prev => {
        return { ...prev, isAuthenticated: data.status, user: data.user }
      })
      console.log(data)
      navigate('/', { replace: true })
    } else {
      console.log(data)
      setAuth(prev => {
        return { ...prev, isAuthenticated: false, user: null }
      })
    }
  }

  const onError = err => {
    console.error(err)
    setAuth(prev => {
      return { ...prev, isAuthenticated: false, user: null }
    })
    navigate('/', { replace: true })
  }

  const { isError, isLoading, data } = useAuthQuery(onSuccess, onError)
  const [authSwitch, setAuthSwitch] = useState(true)

  console.log(auth)

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p className='text-danger'>Error</p>}

      {data && !data.status && (
        <div className='d-flex flex-column w-100'>
          <div className='auth-switch-wrapper w-100'>
            <BootstrapSwitchButton
              checked={true}
              onlabel='LOG IN'
              onstyle='primary'
              offlabel='SIGN UP'
              offstyle='danger'
              width={120}
              height={30}
              style='mb-4'
              onChange={checked => {
                setAuthSwitch(checked)
              }}
            />
          </div>

          <div className='d-flex flex-row justify-content-evenly align-items-center w-100'>
            {authSwitch === null && (
              <h1 className='display-2 fw-bold'> Loading ...</h1>
            )}
            {authSwitch === true && <Login />}
            {authSwitch === false && <Signup />}
          </div>
        </div>
      )}
    </>
  )
}

export default AuthPage
