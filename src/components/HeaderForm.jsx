import './HeaderForm.css'
import ButtonYellow from './ButtonYellow';
import HeaderFormBtn from './HeaderFormBtn';

import { Link } from 'react-router-dom';

const headerBtnContent = [
    {
        icon: 'fa-brands fa-google',
        text: 'Google'
    },
    {
        icon: 'fa-brands fa-apple',
        text: 'Apple'
    }
]

const HeaderForm = () => {
    return (
        <div className="header-form">
            <h1 className='header-form-title'>
                <div><span style={{color: '#F0B90B'}}>150M+</span> Users Chose Us</div>
                <div>Find Out Why Today</div>
            </h1>
            <a href="/" className='header-link'><i className="fa-solid fa-gift"></i>Trade Bitcoin for free <i className="fa-solid fa-arrow-right"></i></a>
            <div className="header-form-container">
                <Link to="/signup">
                    <ButtonYellow text='Sign up with Email of Phone' weight='500' padding='14px 24px' size='17px' width="100%"/>
                </Link>
                <p className='continue-with'>or continue with</p>
                <div className='header-btn-container'>
                    {headerBtnContent.map(el => <HeaderFormBtn text={el.text} icon={el.icon} key={el.text}/>)}
                </div>
            </div>
        </div>
    );
}
 
export default HeaderForm;