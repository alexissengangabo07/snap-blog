import Image from '../images/post.jpg';

const Menu = () => {
  return (
    <div className='menu'>
      <h1>Others posts you may like</h1>
      <div className="post">
        <img src={Image} alt="" />
        <h2>Lorem ipsum dolor sit.</h2>
        <button>Read more</button>
      </div>
    </div>
  )
}

export default Menu