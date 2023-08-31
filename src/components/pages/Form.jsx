import ButtonYellow from "../ButtonYellow";
import HeaderFormBtn from "../HeaderFormBtn";

import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";


import './Form.css'

const headerBtnContent = [
    {
        icon: 'fa-brands fa-google',
        text: 'Continue with Google',
        key: 'form google'
    },
    {
        icon: 'fa-brands fa-apple',
        text: 'Continue with Apple',
        key: 'form apple'
    }
]


const Form = (props) => {


    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [display, setDisplay] = useState('')

    const [visibility, setVisibility] = useState('password')
    const [iconStyle, setIconStyle] = useState('fa-solid fa-eye')

    useEffect(() => {
        if(pass.length < 8 && pass.length !== 0) {
            setDisplay('block')
        }else {
            setDisplay('none')
        }
    }, [pass])

    const showPass = () => {
        if(visibility === 'password') {
            setVisibility('text')
            setIconStyle('fa-solid fa-eye-slash')
        }else {
            setVisibility('password')
            setIconStyle('fa-solid fa-eye')
        }
    }
    

    return (
        <form className="register-form" action="/TokenTrace" method="get">
            <h1>Welcome {props.welcome}</h1>
            <div className="input-box">
                <label htmlFor="emailAddress">Email</label>
                <input maxLength={50} value={email} type="email" id="emailAddress" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="input-box" style={{display: props.isRegister}}>
                <label htmlFor="passw">Password</label>
                <div className="pass-box">
                    <input maxLength={50} value={pass} type={visibility} id="passw" onChange={e => setPass(e.target.value)}/>
                    <i onClick={showPass} className={iconStyle}></i>
                </div>
                <p style={{display: display}} className="error">Password must be 8 or more characters long!</p>
            </div>
            <ButtonYellow size='17px' padding='13px 0' weight='500' width='100%' text={props.text}/>
            <p className="or">or</p>
            {headerBtnContent.map(el => <HeaderFormBtn text={el.text} icon={el.icon} key={el.key}/>)}
            <Link style={{textDecoration: 'none'}} to='/login'>
                <p style={{display: props.login}} className="login-p">Already have an account? <span>Log In</span></p>
            </Link>
            <Link style={{textDecoration: 'none'}} to='/signup'>
                <p style={{display: props.signup}}  className="login-p">Don't havn an account? <span>Sign Up</span></p>
            </Link>
        </form>
    );
}
 
export default Form;