import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';
import './style.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/post/:id',
        element: <Single />
      },
      {
        path: '/write',
        element: <Write />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

const App = () => {
  axios.get('http://localhost:5000/api/posts')
    .then(({ data }) => console.log(data));
  return (
    <div className="app">
      {console.log(window.location.pathname)}
      <div className={(window.location.pathname !== '/register' || window.location.pathname !== '/login') ? 'container' : 'poo'}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;