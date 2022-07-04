import React, { useEffect } from 'react'
import TaskRow from './TaskRow'

function TaskList ({ listName, styleClass, tasks }) {
  return (
    <div
      style={{
        maxHeight: '800px',
        flex: '1'
      }}
      className='d-flex flex-column justify-content-start align-items-center py-3'
    >
      <div className='task-list-header d-flex flex-row justify-content-around align-items-center '>
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
            {tasks?.length}
          </span>
        </h6>
      </div>

      <div
        style={{
          overflowY: 'scroll',
          height: '100%',
          width: '100%'
        }}
        className='task-list-wrapper d-flex flex-column px-2 py-2'
      >
        {tasks && tasks.length > 0 ? (
          tasks.map((task, taskId) => {
            return <TaskRow key={taskId} task={task} />
          })
        ) : (
          <p className='p-4'>No tasks here</p>
        )}
      </div>

      <button className='btn btn-outline-dark w-100 my-3'><i className='bi bi-plus-circle'></i> ADD A TASK</button>
    </div>
  )
}

export default TaskList
