import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="logreg-form">
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label className="logreg-label" htmlFor="name">Full name</label>
                    <input className="logreg-input" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    <label className="logreg-label" htmlFor="email">email</label>
                    <input className="logreg-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label className="logreg-label" htmlFor="password">password</label>
                    <input className="logreg-input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button className="logreg-btn" type="submit"><Link to={'/book'}  style={{textDecoration:'none'}}>Log In</Link></button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </div>
           
        </div>
       
   
    )
}
