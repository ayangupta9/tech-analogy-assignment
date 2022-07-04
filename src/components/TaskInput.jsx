import React, { createContext, useContext, useState } from 'react'
import { TASKS_MICROSERVICE_BASE_URL } from '../App'
import { AuthContext } from '../contexts/AuthContextProvider'

function TaskInput ({ setTodoTasks, setDoingTasks, setDoneTasks }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [taskType, setTaskType] = useState(0)
  const [link, setLink] = useState('')

  const [disabled, setDisabled] = useState(false)

  const { auth } = useContext(AuthContext)

  async function submitTask (e) {
    e.preventDefault()
    setDisabled(true)

    if (title !== '' && auth.user) {
      const data = {
        title: title.trim(),
        description: description.trim(),
        task_type: taskType,
        link: link.trim(),
        user_id: auth?.user.id
      }

      console.log(data)
      try {
        const response = await fetch(
          TASKS_MICROSERVICE_BASE_URL + 'createtask',
          {
            method: 'POST',
            // credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
              // 'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({ ...data })
          }
        )

        const result = await response.json()
        console.log(result)

        // if (result)
        if (taskType === 0) {
          setTodoTasks(prev => [...prev, result])
        } else if (taskType === 0) {
          setDoingTasks(prev => [...prev, result])
        } else {
          setDoneTasks(prev => [...prev, result])
        }

        setTitle('')
        setDescription('')
        setLink('')
        setTaskType(0)
      } catch (e) {
        console.error(e)
      }
    }
    setDisabled(false)
  }

  return (
    <div
      style={{
        maxWidth: '400px',
        borderRadius: '20px',
        boxShadow: '0px 0px 50px -10px lightgray'
      }}
      className='w-100 p-4 d-flex flex-column justify-content-center gap-3'
    >
      <input
        required
        placeholder='What To Do?'
        type='text'
        className='form-control'
        value={title}
        onChange={e => {
          setTitle(e.target.value)
        }}
      />

      <textarea
        rows='3'
        style={{
          resize: 'none'
        }}
        name='task-desc'
        value={description}
        onChange={e => {
          setDescription(e.target.value)
        }}
        className='task-desc form-control'
        placeholder='Task Description'
      ></textarea>

      <input
        required
        placeholder='Link'
        type='url'
        className='form-control'
        value={link}
        onChange={e => {
          setLink(e.target.value.trim())
        }}
      />

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
            onChange={e => {
              setTaskType(e.target.value)
            }}
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
            onChange={e => {
              setTaskType(e.target.value)
            }}
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
            onChange={e => {
              setTaskType(e.target.value)
            }}
            value={2}
          />
          <label htmlFor='task-status'>Done</label>
        </div>
      </div>

      <button
        disabled={disabled || title.length === 0}
        // disabled={disabled}
        onClick={async e => {
          submitTask(e)
        }}
        className='btn btn-dark'
      >
        ADD TO-DO
      </button>
    </div>
  )
}

export default TaskInput
