import { Link } from "react-router-dom";
import './SignUp.css'

import logoImg from '../../assets/logo-img.webp'
import logoText from '../../assets/logo.webp'
import Form from "./Form";

const LogIn = () => {
    return (
        <div className="sign-up">
          <nav className="sign-nav-logo">
            <Link style={{textDecoration: 'none'}} to='/'>
                <img src={logoImg} alt="sign-logo" />
                <img src={logoText} alt="sign-logoText" />
            </Link>
          </nav>
          <div className="register-container">
            <Form isRegister='none' welcome='Back!' login='none' text='Log In'/>
          </div>
      </div>
    );
}
 
export default LogIn;