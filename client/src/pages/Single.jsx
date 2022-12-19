import { Link } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';
import { BsTrash } from 'react-icons/bs';
import Image from '../images/post.jpg';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <main className='single'>
      <div className="content">
        <img src={Image} alt="ok" />
        <div className="user">
          <img src={Image} alt="ok" />
          <div className="info">
            <span>Alexis Sen</span>
          </div>
          <div className="edit">
            <Link to='/write?edit=2'><CiEdit color='teal' size={30} /></Link>
            <span><BsTrash color='red' size={20} /></span>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, tempore?</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem totam optio laborum maxime vero cupiditate minima, quibusdam doloribus nemo ullam delectus pariatur quae suscipit quo quas tenetur hic sapiente!
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis mollitia ea consequuntur quis quae magni harum, quos iusto repellat commodi doloribus assumenda numquam nulla aspernatur suscipit ratione, quas maiores perferendis.
        </p>
      </div>
      <Menu />
    </main>
  )
}

export default Single