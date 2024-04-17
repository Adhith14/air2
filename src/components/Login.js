import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="logreg-form">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="logreg-label" htmlFor="email">email</label>
                    <input className="logreg-input" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label className="logreg-label" htmlFor="password">password</label>
                    <input className="logreg-input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button className="logreg-btn" type="submit"><Link to={'/book'}  style={{textDecoration:'none'}}>Log In</Link></button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </div>
        </div>
        
    )
}