import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [inputs, setInputs] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', inputs);
      toast.success("Conratulation, you are registered successfully, so login to your account !", {
        autoClose: 13000
      });
      navigate('/login');
    } catch (error) {
      setError(error.response.data);
      toast.error(error.response.data);
    }
  }

  return (
    <main className="auth">
      <h1>Register</h1>
      <form action="" autoComplete='off' onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
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
        <span>
          Do you have an account ? <Link to={'/login'}>Login</Link>
        </span>
      </form>
    </main>
  )
}

export default Register;