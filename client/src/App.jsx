import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  return (
    <div className="app">
      <ToastContainer />
      <div className={(location.pathname === '/register' || location.pathname === '/login') ? 'container' : 'container container-width'}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;