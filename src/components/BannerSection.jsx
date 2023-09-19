import './BannerSection.css'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import banner1 from '../assets/ad1.webp';

const indicators = () => (<div className="indicator"></div>);



const BannerSection = () => {
    return (
      <section className="banner-section">
        <Slide pauseOnHover={false} indicators={indicators} transitionDuration={300} duration={3500} arrows={false} autoplay={true} infinite={true} canSwipe={true} className='slide'>
          <div className="each-slide-effect">
            <img className='banner' src={banner1} alt="" />
          </div>
          <div className="each-slide-effect">
            <img className='banner' src='https://public.bnbstatic.com/image/cms/blog/20230124/970c1b53-0ce1-4ac6-90f8-aea31ed58ca4' alt="" />
          </div>
          <div className="each-slide-effect">
            <img className='banner' src='https://cryptoarmy.io/wp-content/uploads/2018/01/BINANCE_Hero_20211116.jpg' alt="" />
          </div>
        </Slide>
      </section>
    );
}
 
export default BannerSection;