import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input
          type="text"
          placeholder='username'
        />
         <input
          type="email"
          placeholder='email'
        />
        <input
          type="password"
          placeholder='password'
        />
        <button type='submit'>Register</button>
        <p>This is an error !</p>
        <span>
          Do you have an account ? <Link to={'/login'}>Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register;