import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import Products from './layout/Products';
import FAQ from './layout/FAQ';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/products' element={<Products />} />
                <Route path='/faq' element={<FAQ />} />
            </Routes>
        </Router>
    );
}

export default App;