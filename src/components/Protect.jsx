import './Protect.css'
import SectionHeader from './SectionHeader';
import SectionLink from './SectionLink';
import ProtectConainer from './ProtectContainer';

import image from '../assets/trusted-section.webp'
import ButtonYellow from './ButtonYellow';

import { Link } from 'react-router-dom';

const Protect = () => {
    return (
        <section className="protect">
            <div className="protect-header">
                <SectionHeader text='Your trusted crypto exchange'/>
                <SectionLink text='View more'/>
            </div>
            <h2 className='protect-subtitle'>Here at Token Trace, we are committed to user protection with strict protocols and industry-leading technical measures.</h2>
            <div className="protect-container">
                <div className="left-protect">
                    <ProtectConainer/>
                </div>
                <div className="right-protect">
                    <img className='protect-img' src={image} alt="" />
                </div>  
            </div>
            <Link to='/signup'>
              <ButtonYellow text='Get Started' padding="15px 0px" size="17px" weight="500" width='200px'/>
            </Link>
        </section>
    );
}
 
export default Protect;