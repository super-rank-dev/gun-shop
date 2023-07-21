import galleryImage1 from '../../assets/images/gallery-1.jpg';
import galleryImage2 from '../../assets/images/gallery-2.jpg';
import galleryImage3 from '../../assets/images/gallery-3.jpg';

const Videos = () => {
    return (
        <div className='videos'>
            <div className='header'>
                videos
            </div>
            <div className='content'>
                <div className="item">
                    <video controls>
                        <source src="movie.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="caption">Ruger .22 Six Shooter</div>
                </div>
                <div className="item">
                    <video controls>
                        <source src="movie.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="caption">Glock 45 pistol</div>
                </div>
            </div>
        </div>
    );
}

export default Videos;