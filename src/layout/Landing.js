import Home from '../components/landing/Home';
import Speciality from '../components/landing/Speciality';
import Products from '../components/landing/Products';
import About from '../components/landing/About';
import Gallery from '../components/landing/Gallery';
import Videos from '../components/landing/Videos';
import Contact from '../components/landing/Contact';

import '../assets/stylesheets/landing.css';

const Landing = () => {
    return (
        <div>
            <Home />
            <Speciality />
            <Products />
            <About />
            <Gallery />
            <Videos />
            <Contact />
        </div>
    );
}

export default Landing;