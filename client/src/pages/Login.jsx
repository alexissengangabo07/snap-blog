import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const [inputs, setInputs] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', inputs);
      navigate('/');
    } catch (error) {
      setError(error.response.data);
      toast.error(error.response.data);
    }
  }

  return (
    <main className="auth">
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit} autoComplete='off'>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder='username'
          name='username'
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
        <button type='submit'>Login</button>
        <span>
          Don't you have an account ? <Link to={'/register'}>Register</Link>
        </span>
      </form>
    </main>
  )
}

export default Login