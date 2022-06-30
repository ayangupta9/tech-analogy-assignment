import React from 'react'
import TaskInput from '../components/TaskInput'
import TasksLists from '../components/TasksLists'

function Dashboard () {
  return (
    <div className='d-flex flex-column w-100 justify-content-center align-items-center mt-5'>
      <div className='d-flex flex-column align-items-center flex-md-row w-100 justify-content-md-evenly gap-4 px-5'>
        <div className='d-flex flex-column  align-items-center gap-3'>
          <h1 className='display-1 fw-bold align-self-center'>
            TAKE
            <span className='bg-dark text-light  px-2'>NOTES</span>
          </h1>
          <p
            style={{
              maxWidth: '600px'
            }}
            className='text-start'
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et unde
            impedit tempore at quisquam, dolore, nemo odit iure, aliquid quidem
            blanditiis. Ea deserunt beatae repellat at odit hic laudantium
            fugiat vel officia assumenda aliquid id asperiores voluptatum
            voluptas laborum dolor, labore sed! Similique soluta nam odio
            nesciunt deserunt consequuntur doloremque!
          </p>
        </div>

        <TaskInput />
      </div>

      <div className='w-100 d-flex flex-column justify-content-center align-items-center mt-5 mb-4'>
        <TasksLists />
      </div>
    </div>
  )
}

export default Dashboard
