import './Navbar.css';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
  return (
    <div className='navbar'>
      <Link to={'/'} className='navbar__logo'>
        Kevin
      </Link>
      <nav className='navbar__menu'></nav>
    </div>
  );
};

export default Navigationbar;
