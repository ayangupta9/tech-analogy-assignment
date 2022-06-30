import React from 'react'

function Header () {
  return (
    <div
      style={{
        maxWidth: '550px',
      }}
      className='d-flex flex-column mt-5 mb-3'
    >
      <h1 className='display-3 fw-bold'>TO-DO LIST</h1>
      <p className='font-monospace text-center'>
        Don't stress it. Try our way.
      </p>
    </div>
  )
}

export default Header
