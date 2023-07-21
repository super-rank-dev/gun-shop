import { Link } from 'react-router-dom';

import logoImage from '../assets/images/gun-shop-logo.png';

import '../assets/stylesheets/navbar.css';

const Navbar = () => {
    return (
        <div className='container'>
            <div className='logo'>
                <img src={logoImage} alt='gun-shop-logo' />
                <div>Mark Gun</div>
            </div>
            <div className='nav'>
                <Link to={'/'}>HOME</Link>
                <Link to={'/products'}>PRODUCTS</Link>
                <Link to={'/faq'}>FAQ</Link>
            </div>
        </div>
    );
}

export default Navbar;