import React, { useContext, useState } from 'react'
import TaskList from './TaskList'
import { AuthContext } from '../contexts/AuthContextProvider'
import useTasksQuery from '../hooks/useTasksQuery'

function TasksLists ({
  todoTasks,
  setTodoTasks,
  doingTasks,
  setDoingTasks,
  doneTasks,
  setDoneTasks
}) {
  const { auth } = useContext(AuthContext)

  const onSuccess = data => {
    setTodoTasks(data['todo'])
    setDoingTasks(data['doing'])
    setDoneTasks(data['done'])
  }

  const { data, isLoading, isError } = useTasksQuery(onSuccess, auth?.user.id)

  return (
    <>
      {isLoading && (
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      )}

      {isError && <p className='text-danger'>Error Occured</p>}

      {data && (
        <div
          style={{
            borderRadius: '15px',
            boxShadow: '0px 0px 20px -4px lightgray'
          }}
          className='d-flex px-4 py-2 gap-3 flex-lg-row flex-column justify-content-center container mb-4 mb-md-0'
        >
          {todoTasks && (
            <TaskList
              listName={'⏲ To Do'}
              styleClass={'danger'}
              tasks={todoTasks}
            />
          )}
          {doingTasks && (
            <TaskList
              listName={'📝 Doing'}
              styleClass={'warning'}
              tasks={doingTasks}
            />
          )}
          {doneTasks && (
            <TaskList
              listName={'🙌 Done'}
              styleClass={'success'}
              tasks={doneTasks}
            />
          )}
        </div>
      )}
      {/* )} */}
    </>
  )
}

export default TasksLists
