import React, { useState } from "react";
import "./styles.css"
import { useNavigate } from "react-router-dom";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [allEntry , setAllEntry] = useState([])
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { email:email, password: pass} 
        setAllEntry([...allEntry, newEntry])
        console.log(allEntry)
    }
    const register = () => {
        navigate("/register")
    }
    const forget = () => {
        navigate("/forget")
    }
    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Log In</button>
                    <p className="forget" onClick={()=> forget()}>Forget Password</p>
                </form>
                <button className="link-btn" onClick={() => register()}>Don't have an account? Register here.</button>
            </div>
        </div>
    )
}