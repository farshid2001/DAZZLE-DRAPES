import React from "react";
import './CSS/loginSignup.css'


const LoginSignup = () => {

    return <>
    <div className="loginSignup">
        <div className="login-container">
            <h1>Sign Up</h1>
            <div className="loginSignup-filed">
                <input type="text" placeholder="enter your name.." />
                <input type="email" placeholder="enter your email.." />
                <input type="password" placeholder="enter your password" />
            </div>
            <button>continue</button>
            <p className="loginSignup-login">
                already have accout ? <span>login here...</span>
            </p>
            <div className="loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>By continuing accept all terms and conditions</p>
            </div>
        </div>
    </div>
    
    </>
}

export default LoginSignup