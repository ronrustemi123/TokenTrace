import './Navigation.css'
import logoImg from '../assets/logo-img.png'
import logoText from '../assets/logo.png'
import NavLink from './NavLink'
import ButtonYellow from './ButtonYellow'
import { useState } from 'react'
import NavButton from './NavButton'

import { Link } from 'react-router-dom'


const linkText = ['Buy Crypto', 'Markets', 'Finance', 'More'];

const Navigation = () => {

    const [pos, setPos] = useState('-500vw');

    const [scale, setScale] = useState(0)

    const handleScale = () => {
        if(scale === 0) {
            setScale(1)
        }else {
            setScale(0)
        }
    }

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
                <Link to='/TokenTrace'>
                    <img src={logoImg} alt="logo" />
                    <img src={logoText} alt="logoText" />
                </Link>
            </div>
            <ul className='nav-menu mobile-hide'>
                {linkText.map((el, i) => <NavLink text={el} key={i}/>)}
            </ul>

            <div className="icons">
                <input placeholder='Search Coin' style={{transform: `scaleX(${scale})`}} className='search' type="text" name="" id="" />
                <i onClick={handleScale} className="fa-solid fa-magnifying-glass"></i>
            </div>

            <Link style={{textDecoration: 'none'}} to='/login'>
                <p className='log-in mobile-hide'>Log In</p>
            </Link>
           <Link to="/signup">
                <NavButton text='Register' padding='8px 15px' size='14px' weight='400'/>
           </Link>



            <i className="fa-solid fa-bars burger" onClick={handleClick}></i>
            <div className="off-canvas" style={{left: pos}}>
                <i onClick={handleClick} className="fa-solid fa-xmark close"></i>
                <div className="canvas-items">
                    <Link  to='/login' style={{textDecoration: 'none'}}>
                        <p style={{textDecoration: 'none'}} className='log-in mobile-canvas'>Log In</p>
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