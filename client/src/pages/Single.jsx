import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { CiEdit } from 'react-icons/ci';
import { BsTrash } from 'react-icons/bs';
import Image from '../images/post.jpg';
import Menu from '../components/Menu';
import { AuthContext } from '../context/auth.context';

const Single = () => {
  const [post, setPost] = useState([]);
  const postId = useLocation().pathname.split('/')[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${postId}`);
        setPost(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <main className='single'>
      <div className="content">
        <img src={Image} alt="ok" />
        <div className="user">
          <img src={Image} alt="ok" />
          <div className="info">
            <span>Alexis Sen</span>
            <p>Posted {moment(new Date()).fromNow()}</p>
          </div>
          {console.log(currentUser?.username, post.username)}
          {currentUser?.username === post.username && (
            <div className="edit">
              <Link to='/write?edit=2'><CiEdit color='teal' size={30} /></Link>
              <span><BsTrash color='red' size={20} /></span>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.content}
      </div>
      <Menu />
    </main>
  )
}

export default Single;