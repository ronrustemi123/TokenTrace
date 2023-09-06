import './HeaderIllustrations.css'

import illustrations from '../assets/header-illustrations.webp'

const HeaderIllustrations = () => {
    return (
        <div className='illust-div'>
            <img width={100} height={100} className='illustrations' src={illustrations} alt="illustrations" />
        </div>
    );
}
 
export default HeaderIllustrations;