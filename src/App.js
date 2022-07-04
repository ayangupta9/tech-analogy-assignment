import './App.css'
import Header from './components/Header'
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
// import { useContext } from 'react'
// import { AuthContext } from './contexts/AuthContextProvider'
import Navbar from './components/Navbar'

export const TASKS_MICROSERVICE_BASE_URL =
  'http://task-flask-microservice.herokuapp.com/'
export const AUTH_MICROSERVICE_BASE_URL =
'https://auth-express-microservice-f3bebfino-ayangupta9.vercel.app/'
  // 'https://lovely-voyageurs-32753.herokuapp.com/'

// const NotLoggedInPrivateRoute = ({ children }) => {
//   const { auth } = useContext(AuthContext)
//   return auth.isAuthenticated && auth.isAuthenticated !== undefined ? (
//     children
//   ) : (
//     <Navigate replace={true} to='/auth' />
//   )
// }
// const LoggedInPrivateRoute = ({ children }) => {
//   const { auth } = useContext(AuthContext)
//   return auth.isAuthenticated && auth.isAuthenticated !== undefined ? (
//     <Navigate replace={true} to='/dashboard' />
//   ) : (
//     children
//   )
// }

function App () {
  return (
    <div className='App'>
      <div className='font-monospace w-100 d-flex flex-column justify-content-center align-items-center app-wrapper'>
        <BrowserRouter>
          <Navbar />
          {/* <Header /> */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
