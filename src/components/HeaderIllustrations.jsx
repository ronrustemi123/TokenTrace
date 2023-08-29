import './HeaderIllustrations.css'

import illustrations from '../assets/header-illustrations.png'

const HeaderIllustrations = () => {
    return (
        <div className='illust-div'>
            <img className='illustrations' src={illustrations} alt="illustrations" />
        </div>
    );
}
 
export default HeaderIllustrations;