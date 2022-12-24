import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log(inputs);
      const response = await axios.post('http://localhost:5000/api/auth/register', inputs);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="auth">
      <h1>Register</h1>
      <form action="" autoComplete='off' onSubmit={handleSubmit}>
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
          autoComplete='off'
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