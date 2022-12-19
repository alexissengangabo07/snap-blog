import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/post.jpg';

const Home = () => {
  return (
    <main className='home'>
      <div className="posts">
        <div className="post">
          <div className="image">
            <img src={Image} alt="image-react" />
          </div>
          <div className="content">
            <Link to={'/post/12'} className="link">
              <h1>Post Title</h1>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse autem corporis. Nemo quos non voluptas, maiores quia doloremque dolor veritatis, dignissimos possimus iure quod quibusdam enim qui itaque temporibus.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src={Image} alt="image-react" />
          </div>
          <div className="content">
            <Link to={'/post/12'} className="link">
              <h1>Post Title</h1>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse autem corporis. Nemo quos non voluptas, maiores quia doloremque dolor veritatis, dignissimos possimus iure quod quibusdam enim qui itaque temporibus.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src={Image} alt="image-react" />
          </div>
          <div className="content">
            <Link to={'/post/12'} className="link">
              <h1>Post Title</h1>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse autem corporis. Nemo quos non voluptas, maiores quia doloremque dolor veritatis, dignissimos possimus iure quod quibusdam enim qui itaque temporibus.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src={Image} alt="image-react" />
          </div>
          <div className="content">
            <Link to={'/post/12'} className="link">
              <h1>Post Title</h1>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse autem corporis. Nemo quos non voluptas, maiores quia doloremque dolor veritatis, dignissimos possimus iure quod quibusdam enim qui itaque temporibus.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src={Image} alt="image-react" />
          </div>
          <div className="content">
            <Link to={'/post/12'} className="link">
              <h1>Post Title</h1>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse autem corporis. Nemo quos non voluptas, maiores quia doloremque dolor veritatis, dignissimos possimus iure quod quibusdam enim qui itaque temporibus.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home