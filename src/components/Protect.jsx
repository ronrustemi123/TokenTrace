import './Protect.css'
import SectionHeader from './SectionHeader';
import SectionLink from './SectionLink';
import ProtectConainer from './ProtectContainer';

import image from '../assets/trusted-section.webp'
import ButtonYellow from './ButtonYellow';

const Protect = () => {
    return (
        <section className="protect">
            <div className="protect-header">
                <SectionHeader text='Your trusted crypto exchange'/>
                <SectionLink text='View more'/>
            </div>
            <h2 className='protect-subtitle'>Here at Binance, we are committed to user protection with strict protocols and industry-leading technical measures.</h2>
            <div className="protect-container">
                <div className="left-protect">
                    <ProtectConainer/>
                </div>
                <div className="right-protect">
                    <img className='protect-img' src={image} alt="" />
                </div>  
            </div>
            <ButtonYellow width="200px" padding="15px 0" text="Get Started" size="16px" weight="500"/>
        </section>
    );
}
 
export default Protect;