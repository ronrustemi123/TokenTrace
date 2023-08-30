import './Navigation.css'
import logoImg from '../assets/logo-img.png'
import logoText from '../assets/logo.png'
import NavLink from './NavLink'
import ButtonYellow from './ButtonYellow'
import { useState } from 'react'


const linkText = ['Buy Crypto', 'Markets', 'Finance', 'More'];

const Navigation = () => {

    const [pos, setPos] = useState('-500vw');

    const handleClick = () => {
        if(pos === '0') {
            setPos('-500vw')
        }else {
            setPos('0')
        }
    }

    return (
        <nav className="nav">
            <div className="nav-logo">
                <img src={logoImg} alt="logo" />
                <img src={logoText} alt="logoText" />
            </div>
            <ul className='nav-menu mobile-hide'>
                {linkText.map((el, i) => <NavLink text={el} key={i}/>)}
            </ul>

            <div className="icons">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-star mobile-hide"></i>
            </div>

            <a href="/" className='log-in mobile-hide'>Log In</a>
            <ButtonYellow text='Register' padding='8px 15px' size='14px' weight='400'/>

            {/* This is for mobile burger menu */}
            <i className="fa-solid fa-bars burger" onClick={handleClick}></i>
            <div className="off-canvas" style={{left: pos}}>
                <i onClick={handleClick} className="fa-solid fa-xmark close"></i>
                <div className="canvas-items">
                    <ButtonYellow text='Register' padding='10px 100px' size='18px' weight='500'/>
                    {linkText.map((el, i) => <NavLink text={el} key={i}/>)}
                </div>
            </div>
        </nav>
    );
}
 
export default Navigation;