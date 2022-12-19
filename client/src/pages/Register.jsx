import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <main className="auth">
      <h1>Register</h1>
      <form action="">
        <input
          type="text"
          placeholder='username'
          required
        />
         <input
          type="email"
          placeholder='email'
          required
        />
        <input
          type="password"
          placeholder='password'
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