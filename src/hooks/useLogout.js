import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContextProvider'

function useLogout () {
  const { setAuth } = useContext(AuthContext)

  return function logout () {
    console.log('logout');

    fetch('/logout')
      .then(response => response.json())
      .then(data => {
        console.log(data)

        setAuth({
          isAuthenticated: null,
          user: null
        })
      })
  }
}

export default useLogout
