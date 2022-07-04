import React, { useContext, useState } from 'react'
import TaskInput from '../components/TaskInput'
import TasksLists from '../components/TasksLists'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContextProvider'
import useAuthQuery from '../hooks/useAuthQuery'

function Dashboard () {
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
    setAuth(prev => {
      return { ...prev, isAuthenticated: false, user: null }
    })
    navigate('/', { replace: true })
  }

  const { data, isError, isLoading } = useAuthQuery(onSuccess, onError)
  console.log(auth)

  const [todoTasks, setTodoTasks] = useState([])
  const [doingTasks, setDoingTasks] = useState([])
  const [doneTasks, setDoneTasks] = useState([])

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p className='text-danger'>Error</p>}

      {data && data.status && (
        <div className='d-flex flex-column w-100 justify-content-center align-items-center'>
          {/* <div className='d-flex flex-column align-items-center flex-md-row w-100 justify-content-md-evenly gap-4 px-5'>
            <TaskInput
              todoTasks={todoTasks}
              setTodoTasks={setTodoTasks}
              doingTasks={doingTasks}
              setDoingTasks={setDoingTasks}
              doneTasks={doneTasks}
              setDoneTasks={setDoneTasks}
            />
          </div> */}

          <div className='w-100 d-flex flex-column justify-content-center align-items-center mt-5 mb-4'>
            <TasksLists
              todoTasks={todoTasks}
              setTodoTasks={setTodoTasks}
              doingTasks={doingTasks}
              setDoingTasks={setDoingTasks}
              doneTasks={doneTasks}
              setDoneTasks={setDoneTasks}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Dashboard
