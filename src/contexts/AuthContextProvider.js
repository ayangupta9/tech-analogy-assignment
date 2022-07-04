import React, { createContext, useState } from 'react'

export const AuthContext = createContext(null)

function AuthContextProvider ({ children }) {
  const [auth, setAuth] = useState({
    isAuthenticated: null,
    user: null
  })

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
