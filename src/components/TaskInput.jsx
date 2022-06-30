import React from 'react'

function TaskInput () {
  return (
    <div
      style={{
        maxWidth: '400px',
        borderRadius: '20px',
        boxShadow: '0px 0px 50px -10px lightgray'
      }}
      className='w-100 p-4 d-flex flex-column justify-content-center gap-3'
    >
      <input placeholder='What To Do?' type='text' className='form-control' />

      <textarea
        rows='3'
        style={{
            resize:'none'
        }}
        name='task-desc'
        className='task-desc form-control'
        placeholder='Task Description'
      ></textarea>

      <div className='task-status d-flex flex-row justify-content-evenly'>
        <div className='d-flex flex-column'>
          <input
            style={{
              accentColor: 'black'
            }}
            type='radio'
            name='task-status'
            className='task-status'
            value={0}
          />
          <label htmlFor='task-status'>To-Do</label>
        </div>

        <div className='d-flex flex-column'>
          <input
            style={{
              accentColor: 'black'
            }}
            type='radio'
            name='task-status'
            className='task-status'
            value={1}
          />
          <label htmlFor='task-status'>Doing</label>
        </div>

        <div className='d-flex flex-column'>
          <input
            style={{
              accentColor: 'black'
            }}
            type='radio'
            name='task-status'
            className='task-status'
            value={2}
          />
          <label htmlFor='task-status'>Done</label>
        </div>
      </div>

      <button className='btn btn-dark'>ADD TO-DO</button>
    </div>
  )
}

export default TaskInput
