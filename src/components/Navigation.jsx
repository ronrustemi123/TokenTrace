import './Navigation.css'
import logoImg from '../assets/logo-img.webp'
import logoText from '../assets/logo.webp'
import NavLink from './NavLink'
import ButtonYellow from './ButtonYellow'
import { useState } from 'react'
import NavButton from './NavButton'

import { Link } from 'react-router-dom'


const linkText = ['Buy Crypto', 'Markets', 'Finance', 'More'];

const Navigation = () => {

    const [pos, setPos] = useState('-100vw');



    const handleClick = () => {
        if(pos === '0') {
            setPos('-100vw')
        }else {
            setPos('0')
        }
    }

    return (
        <nav className="nav">
            <div className="nav-logo">
                <Link to='/'>
                    <img height={24} src={logoImg} alt="logo" />
                    <img height={24} src={logoText} alt="logoText" />
                </Link>
            </div>
            <ul className='nav-menu mobile-hide'>
                {linkText.map((el, i) => <NavLink text={el} key={i}/>)}
            </ul>

            <div className="icons">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <Link style={{textDecoration: 'none'}} to='/login'>
                <p className='log-in mobile-hide'>Log In</p>
            </Link>
           <Link to="/signup">
                <NavButton text='Register' padding='8px 12px' size='14px' weight='400'/>
           </Link>



            <i className="fa-solid fa-bars burger" onClick={handleClick}></i>
            <div className="off-canvas" style={{left: pos}}>
                <i onClick={handleClick} className="fa-solid fa-xmark close"></i>
                <div className="canvas-items">
                    <Link  to='/login' style={{textDecoration: 'none'}}>
                        <p className='log-in mobile-canvas'>Log In</p>
                    </Link>
                    <Link to='/signup' >
                        <ButtonYellow text='Register' padding='10px 100px' size='18px' weight='500'/>
                    </Link>
                    {linkText.map(el => <NavLink text={el} key={el}/>)}
                </div>
            </div>
        </nav>
    );
}
 
export default Navigation;