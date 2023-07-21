import { useState } from 'react';

import productImage1 from '../../assets/images/product-1.jpg';
import productImage2 from '../../assets/images/product-2.jpg';
import productImage3 from '../../assets/images/product-3.jpg';
import productImage4 from '../../assets/images/product-4.jpg';
import productImage5 from '../../assets/images/product-5.jpg';
import productImage6 from '../../assets/images/product-6.jpg';
import productImage7 from '../../assets/images/product-7.jpg';
import productImage8 from '../../assets/images/product-8.jpg';

const diff = 200;

const Products = () => {

    const [offset, setOffset] = useState(0);

    const gotoPrev = () => {
        setOffset(offset + diff);
    };

    const gotoNext = () => {
        setOffset(offset - diff);
    };

    return (
        <div className='products'>
            <div className='header'>
                Products
            </div>
            <div className='action'>
                <button className='btn' onClick={gotoPrev}>Prev</button>
                <button className='btn' onClick={gotoNext}>Next</button>
            </div>
            <div className='content' style={{ marginLeft: `${offset}px` }}>
                <div className="item">
                    <img src={productImage1} alt={'product-1'} />
                    <div className="caption">Ruger .22 Six Shooter</div>
                </div>
                <div className="item">
                    <img src={productImage2} alt={'product-2'} />
                    <div className="caption">Ruger .22 Six Shooter</div>
                </div>
                <div className="item">
                    <img src={productImage3} alt={'product-3'} />
                    <div className="caption">Ruger .22 Six Shooter</div>
                </div>
                <div className="item">
                    <img src={productImage4} alt={'product-4'} />
                    <div className="caption">Ruger .22 Six Shooter</div>
                </div>
                <div className="item">
                    <img src={productImage5} alt={'product-5'} />
                    <div className="caption">Ruger .22 Six Shooter</div>
                </div>
                <div className="item">
                    <img src={productImage6} alt={'product-6'} />
                    <div className="caption">Ruger .22 Six Shooter</div>
                </div>
                <div className="item">
                    <img src={productImage7} alt={'product-7'} />
                    <div className="caption">Ruger .22 Six Shooter</div>
                </div>
                <div className="item">
                    <img src={productImage8} alt={'product-8'} />
                    <div className="caption">Ruger .22 Six Shooter</div>
                </div>
            </div>
        </div>
    );
}

export default Products;