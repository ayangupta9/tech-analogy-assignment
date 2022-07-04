import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContextProvider'
import { useNavigate } from 'react-router-dom'
import useAuthQuery from '../hooks/useAuthQuery'

function ProfilePage () {
  const { auth, setAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSuccess = data => {
    if (data.status) {
      setAuth(prev => {
        return { ...prev, isAuthenticated: data.status, user: data.user }
      })
    } else {
      setAuth(prev => {
        return { ...prev, isAuthenticated: false, user: null }
      })
      navigate('/', { replace: true })
    }
  }

  const onError = err => {
    console.error(err)
    navigate('/', { replace: true })
  }

  const { data, isError, isLoading } = useAuthQuery(onSuccess, onError)

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p className='text-danger'>Error</p>}

      {data && data.status && (
        <div>
          <h1>Profile Page</h1>
          <br />
          {auth.user && (
            <div>
              <p>
                <b>Id: </b>
                <span>{auth?.user.id}</span>
              </p>

              <p>
                <b>Username: </b>
                <span>{auth?.user.username}</span>
              </p>

              <p>
                <b>Email: </b>
                <span>{auth?.user.email}</span>
              </p>

              <p>
                <b>Joined On: </b>
                <span>{auth?.user.joined_on}</span>
              </p>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default ProfilePage
