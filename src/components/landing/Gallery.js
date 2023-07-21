import galleryImage1 from '../../assets/images/gallery-1.jpg';
import galleryImage2 from '../../assets/images/gallery-2.jpg';
import galleryImage3 from '../../assets/images/gallery-3.jpg';

const Gallery = () => {
    return (
        <div className='gallery'>
            <div className='header'>
                Gallery
            </div>
            <div className='content'>
                <div className="item">
                    <img src={galleryImage1} alt={'gallery-1'} />
                    <div className="caption">Ruger .22 Six Shooter</div>
                </div>
                <div className="item">
                    <img src={galleryImage2} alt={'gallery-2'} />
                    <div className="caption">Glock 45 pistol</div>
                </div>
                <div className="item">
                    <img src={galleryImage3} alt={'gallery-3'} />
                    <div className="caption">STNGR AR-15 Free Float Handguard HWK</div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;