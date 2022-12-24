import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <main className="auth">
      <h1>Register</h1>
      <form action="">
        <input
          type="text"
          placeholder='username'
          name='username'
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder='email'
          name='email'
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder='password'
          name='password'
          onChange={handleChange}
          required
        />
        <button type='submit'>Register</button>
        <p>This is an error !</p>
        <span>
          Do you have an account ? <Link to={'/login'}>Login</Link>
        </span>
      </form>
    </main>
  )
}

export default Register;