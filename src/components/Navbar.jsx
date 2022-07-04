import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContextProvider'
import useLogout from '../hooks/useLogout'

function Navbar () {
  const { auth } = useContext(AuthContext)

  const logout = useLogout()

  return (
    <nav className='navbar navbar-expand-lg container-fluid navbar-light bg-light d-flex flex-row justify-content-between w-100'>
      <NavLink className='navbar-brand' to={'/'}>
        📝
      </NavLink>
      <div className='navbar-nav d-none d-md-flex flex-row gap-4'>
        <NavLink className='nav-item nav-link' to={'/'}>
          Home
        </NavLink>

        {!auth.isAuthenticated || auth.isAuthenticated === undefined ? (
          <NavLink className='nav-item nav-link' to={'/auth'}>
            Become a member
          </NavLink>
        ) : null}

        {auth.isAuthenticated && auth.isAuthenticated !== undefined && (
          <>
            <NavLink className='nav-item nav-link' to={'/dashboard'}>
              Dashboard
            </NavLink>

            <NavLink className='nav-item nav-link' to={'/profile'}>
              Profile
            </NavLink>
            
            {/* 
            <button className='nav-item nav-link btn' onClick={logout}>
              Logout
            </button> */}
            
            {/* <NavLink className='nav-item nav-link' onClick={logout} to={'/'}>
              Logout
            </NavLink> */}
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
