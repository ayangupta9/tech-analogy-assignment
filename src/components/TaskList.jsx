import React, { useEffect } from 'react'
import TaskRow from './TaskRow'

function TaskList ({ listName, styleClass, tasks }) {
  useEffect(() => {
    console.log(tasks)
  }, [])

  return (
    <div
      style={{
        height: '300px',
        borderRadius: '15px',
        boxShadow: '0px 0px 20px -4px lightgray'
      }}
      className='d-flex flex-column justify-content-start flex-fill align-items-center py-3 px-3'
    >
      <div className='task-list-header d-flex flex-row justify-content-around align-items-center'>
        <h6
          className={`bg-${styleClass} rounded-3 bg-opacity-25 fw-bold w-100 p-2 text-start ps-4`}
        >
          {listName}
          <span
            style={{
              borderRadius: '50%',
              border: 'solid 1px black'
            }}
            className='bg-white ms-5 px-2 py-1'
          >
            {tasks?.tasks?.length}
          </span>
        </h6>
      </div>

      <div
        style={{
          overflowY: 'scroll',
          height: '100%',
          width: '100%'
        }}
        className='d-flex flex-column gap-2 px-2 py-2'
      >
        {tasks &&
          tasks.tasks.map((task, taskId) => {
            return <TaskRow key={taskId} task={task} signal={tasks.signal} />
          })}
      </div>
    </div>
  )
}

export default TaskList
