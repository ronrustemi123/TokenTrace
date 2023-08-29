import './HeaderForm.css'
import ButtonYellow from './ButtonYellow';
import HeaderFormBtn from './HeaderFormBtn';

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
                <div>150M+ Users Chose Us</div>
                <div>Find Out Why Today</div>
            </h1>
            <a href="/" className='header-link'>Trade Bitcoin for free <i className="fa-solid fa-arrow-right"></i></a>
            <div className="header-form-container">
                <ButtonYellow text='Sign up with Email of Phone' weight='500' padding='14px 24px' size='17px' width="100%"/>
                <p className='continue-with'>or continue with</p>
                <div className='header-btn-container'>
                    {headerBtnContent.map(el => <HeaderFormBtn text={el.text} icon={el.icon}/>)}
                </div>
            </div>
        </div>
    );
}
 
export default HeaderForm;