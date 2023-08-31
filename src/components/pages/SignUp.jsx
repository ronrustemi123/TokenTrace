import { Link } from "react-router-dom";
import './SignUp.css'

import logoImg from '../../assets/logo-img.png'
import logoText from '../../assets/logo.png'
import Form from "./Form";



const SignUp = () => {
    return (
      <div className="sign-up">
          <nav className="sign-nav-logo">
            <Link style={{textDecoration: 'none'}} to='/TokenTrace'>
                <img src={logoImg} alt="sign-logo" />
                <img src={logoText} alt="sign-logoText" />
            </Link>
          </nav>
          <div className="register-container">
            <Form isRegister='flex' welcome='to Token Trace!' signup='none' text='Sign Up'/>
          </div>
      </div>
    );
}
 
export default SignUp;