import React from 'react'
import { Accordion } from 'react-bootstrap'

function TaskRow ({ task, signal }) {
  return (
    <div
      style={{
        border: 'solid 0.01em lightgray'
        // boxShadow: '0px 0px 10px -2px lightgray'
      }}
      className='task p-2 rounded-3 bg-white d-flex flex-row gap-3'
    >
      {/* {signal === 1 || signal === 2 ? (
        <button className='btn p-1'>
          <i className='bi bi-arrow-left-short'></i>
        </button>
      ) : null} */}

      <div className='d-flex flex-column gap-1 flex-fill'>
        <p className='flex-fill m-0 text-start'>{task[1]}</p>
        <p className='text-end fw-bold m-0'>{task[2]}</p>
        <p className='text-end fw-bold m-0'>{task[3]}</p>
      </div>

      {/* {signal === 0 || signal === 1 ? (
        <button className='bg-white border-0 p-1'>
          <i className='bi bi-arrow-right-short'></i>
        </button>
      ) : null} */}
    </div>

    // bi-pencil-fill
    // <Accordion>
    //   <Accordion.Item eventKey='0'>
    //     <Accordion.Header>{task.title}</Accordion.Header>
    //     <Accordion.Body>
    //       <p>{task.desc}</p>
    //       <p className='text-secondary fw-bold'>{task.createdOn}</p>
    //     </Accordion.Body>
    //   </Accordion.Item>
    // </Accordion>
  )
}

export default TaskRow
