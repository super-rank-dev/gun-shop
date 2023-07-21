import specialImage1 from '../../assets/images/special-1.jpg';
import specialImage2 from '../../assets/images/special-2.jpg';
import specialImage3 from '../../assets/images/special-3.jpg';
import specialImage4 from '../../assets/images/special-4.jpg';

const Speciality = () => {
    return (
        <div className='speciality'>
            <div className='header'>
                Our Speciality
            </div>
            <div className='content'>
                <div className="item">
                    <img src={specialImage1} alt={'special-1'} />
                    <div className="caption">Ruger .22 Six Shooter</div>
                </div>
                <div className="item">
                    <img src={specialImage2} alt={'special-2'} />
                    <div className="caption">Glock 45 pistol</div>
                </div>
                <div className="item">
                    <img src={specialImage3} alt={'special-3'} />
                    <div className="caption">STNGR AR-15 Free Float Handguard HWK</div>
                </div>
                <div className="item">
                    <img src={specialImage4} alt={'special-4'} />
                    <div className="caption">STNGR AR-15 Free Float RPTR Handguard</div>
                </div>
            </div>
        </div>
    );
}

export default Speciality;