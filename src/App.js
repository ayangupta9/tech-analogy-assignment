import './App.css'
import Header from './components/Header'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'

function App () {
  return (
    <div className='App'>
      <div className='font-monospace w-100 d-flex flex-column justify-content-center align-items-center app-wrapper'>
        {/* <Header /> */}
        {/* <h1 className='text-3xl font-bold underline'>Hello world!</h1> */}
        {/* <AuthPage /> */}

        <Dashboard />
      </div>
    </div>
  )
}

export default App
