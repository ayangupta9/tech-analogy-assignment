import React, { useEffect, useState } from 'react'
import TaskList from './TaskList'
import data from '../data.json'

function TasksLists () {
  const [todoTasks, setTodoTasks] = useState({ tasks: data['todo'], signal: 0 })
  const [doingTasks, setDoingTasks] = useState({
    tasks: data['doing'],
    signal: 1
  })
  const [doneTasks, setDoneTasks] = useState({ tasks: data['done'], signal: 2 })

  return (
    <div className='d-flex px-md-0 px-5 flex-lg-row flex-column justify-content-center gap-4 container mb-4 mb-md-0'>
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
  )
}

export default TasksLists
