import React from 'react'
import { Link } from 'react-router-dom'

function Form() {
  return (
    <div className='nav'>
        <Link to='/login' className='login'>Login</Link>
        <Link to='/signup' className='signup'>SignUp</Link>
    </div>
  )
}

export default Form