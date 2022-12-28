import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Image from '../images/post.jpg';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts${cat}`);
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [cat]);

  return (
    <main className='home'>
      <div className="posts">
        {Array.from(posts).map((post, index) => (
          <div className="post" key={index}>
            <div className="image">
              <img src={Image} alt="image-react" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className="link">
                <h1>{post.title}</h1>
              </Link>
              <p>{post.content.substring(0, 300)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home