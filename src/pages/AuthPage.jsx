import React, { useState } from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'

function AuthPage () {
  const [authSwitch, setAuthSwitch] = useState(true)

  return (
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

        {/* <Login /> */}
        {/* <Signup /> */}
      </div>
    </div>
  )
}

export default AuthPage
