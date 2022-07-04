import React from 'react'
import { Link } from 'react-router-dom'

function HomePage () {
  return (
    <div className='w-100'>
      <h1>HomePage</h1>
      {/* <br /> */}
      <br />
      <div className='d-flex flex-row mx-5 justify-content-evenly'>
        <Link to={'/auth'}>Auth Page</Link>
        <Link to={'/dashboard'}>Dashboard</Link>
        <Link to={'/profile'}>Profile Page</Link>
      </div>
    </div>
  )
}

export default HomePage
